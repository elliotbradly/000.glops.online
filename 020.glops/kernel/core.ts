// --- 1. THE REACTION RULEBOOK (Data, not Code) ---
// This is the heart of the system. A list of reaction formulas.
// Can be loaded from a JSON or other data file.
export interface ReactionRule {
    name: string;
    required_signals: Record<string, number>;
    required_reagents: Record<string, number>;
    consumed_reagents: Record<string, number>;
    produced_signals: Record<string, string>;
    produced_reagents: Record<string, number>;
    priority: number;
}

// Master list of all possible reactions
export let ReactionRulebook: ReactionRule[] = [];


// --- 2. THE CHEMICAL CONTAINER (The fundamental building block) ---
// Every component on a ship is a ChemicalContainer.
export class ChemicalContainer {
    id: string;
    parent_ship: Ship;
    adjacent_containers: ChemicalContainer[];

    // The chemicals currently inside this container.
    signals: Record<string, number> = {};
    reagents: Record<string, number> = {};

    // A flag to prevent infinite loops in one tick.
    has_reacted_this_tick: boolean = false;

    constructor(id: string, parent_ship: Ship) {
        this.id = id;
        this.parent_ship = parent_ship;
        this.adjacent_containers = [];
    }

    // --- METHODS ---
    addReagent(reagent_name: string, amount: number) {
        if (!this.reagents[reagent_name]) {
            this.reagents[reagent_name] = 0;
        }
        this.reagents[reagent_name] += amount;
    }

    setSignal(signal_name: string, value: number) {
        this.signals[signal_name] = value;
    }

    adjustSignal(signal_name: string, delta: string) {
        if (!this.signals[signal_name]) {
            this.signals[signal_name] = 0;
        }
        const change = parseFloat(delta);
        if (!isNaN(change)) {
            this.signals[signal_name] += change;
        }
    }
}


// --- 3. THE SHIP (A collection of containers) ---
export class Ship {
    id: string;
    status: string;
    all_containers: Record<string, ChemicalContainer> = {};

    constructor(id: string, status: string = "nominal") {
        this.id = id;
        this.status = status;
    }

    getContainerByID(id: string): ChemicalContainer | undefined {
        return this.all_containers[id];
    }
}

// Placeholder function, assuming it's defined elsewhere based on reagent properties
function reagentIsPropagating(reagent_name: string): boolean {
    // In a real implementation, this would look up the reagent's properties.
    // For now, let's assume 'FRACTURE_EVENT' propagates.
    return reagent_name === 'FRACTURE_EVENT';
}


// --- II. The Game's Main Processing Loop (The "Physics Engine") ---
export function mainGameLoop(all_ships: Ship[]) {

    // --- TICK SETUP PHASE ---
    for (const ship of all_ships) {
        for (const containerId in ship.all_containers) {
            ship.all_containers[containerId].has_reacted_this_tick = false;
        }
    }

    // --- PLAYER INPUT PHASE (Example) ---
    // This would be driven by actual player actions
    // For demonstration:
    // const player_action_is_fire_cryo = true;
    // if (player_action_is_fire_cryo) {
    //     const target_ship = all_ships.find(s => s.id === "Dreadnought");
    //     if (target_ship) {
    //         const target_container = target_ship.getContainerByID("CoolantConduit");
    //         if (target_container) {
    //             target_container.addReagent("CRYO", 1.0);
    //             console.log("EVENT: Reagent [CRYO] injected into Dreadnought:CoolantConduit.");
    //         }
    //     }
    // }


    // --- REACTION PROCESSING PHASE ---
    let reactions_occurred_in_pass = true;
    while (reactions_occurred_in_pass) {

        reactions_occurred_in_pass = false;

        for (const ship of all_ships) {
            for (const containerId in ship.all_containers) {
                const container = ship.all_containers[containerId];

                if (container.has_reacted_this_tick) {
                    continue;
                }

                const best_reaction_to_trigger = findValidReaction(container, ReactionRulebook);

                if (best_reaction_to_trigger) {
                    reactions_occurred_in_pass = true;
                    container.has_reacted_this_tick = true;

                    console.log(`REACTION: '${best_reaction_to_trigger.name}' triggered in ${container.id}.`);

                    // 1. Consume reagents
                    for (const reagent_name in best_reaction_to_trigger.consumed_reagents) {
                        const amount = best_reaction_to_trigger.consumed_reagents[reagent_name];
                        container.reagents[reagent_name] -= amount;
                    }

                    // 2. Produce signals
                    for (const signal_name in best_reaction_to_trigger.produced_signals) {
                        const delta = best_reaction_to_trigger.produced_signals[signal_name];
                        container.adjustSignal(signal_name, delta);
                    }

                    // 3. Produce reagents
                    for (const reagent_name in best_reaction_to_trigger.produced_reagents) {
                        const amount = best_reaction_to_trigger.produced_reagents[reagent_name];
                        if (reagentIsPropagating(reagent_name)) {
                            for (const neighbor of container.adjacent_containers) {
                                neighbor.addReagent(reagent_name, amount);
                            }
                        } else {
                            container.addReagent(reagent_name, amount);
                        }
                    }
                }
            }
        }
    }

    // --- CLEANUP PHASE ---
    // e.g., decay reagents, check for ship destruction
}


// --- III. The findValidReaction Helper Function ---
export function findValidReaction(container: ChemicalContainer, rulebook: ReactionRule[]): ReactionRule | null {

    const potential_reactions: ReactionRule[] = [];

    for (const rule of rulebook) {
        let rule_is_valid = true;

        // Check signals
        for (const signal_name in rule.required_signals) {
            if ((container.signals[signal_name] || 0) < rule.required_signals[signal_name]) {
                rule_is_valid = false;
                break;
            }
        }
        if (!rule_is_valid) continue;

        // Check reagents
        for (const reagent_name in rule.required_reagents) {
            if ((container.reagents[reagent_name] || 0) < rule.required_reagents[reagent_name]) {
                rule_is_valid = false;
                break;
            }
        }
        if (!rule_is_valid) continue;

        potential_reactions.push(rule);
    }

    if (potential_reactions.length === 0) {
        return null;
    }

    potential_reactions.sort((a, b) => b.priority - a.priority);

    return potential_reactions[0];
}
