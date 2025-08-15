import { ChemicalContainer, Ship } from "./reaction.model";
import { ReactionRule, ReactionRulebook } from "./fce/reaction.interface";

export { initReaction  } from "./buz/reaction.buzz";
export { updateReaction  } from "./buz/reaction.buzz";


// --- III. The `findValidReaction` Helper Function ---
export function findValidReaction(container: ChemicalContainer, rulebook: ReactionRulebook): ReactionRule | null {
    const potential_reactions: ReactionRule[] = [];

    for (const rule of rulebook) {
        let rule_is_valid = true;

        for (const signal_name in rule.required_signals) {
            const min_value = rule.required_signals[signal_name];
            if ((container.signals[signal_name] || 0) < min_value) {
                rule_is_valid = false;
                break;
            }
        }
        if (!rule_is_valid) continue;

        for (const reagent_name in rule.required_reagents) {
            const min_amount = rule.required_reagents[reagent_name];
            if ((container.reagents[reagent_name] || 0) < min_amount) {
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

function reagentIsPropagating(reagent_name: string): boolean {
    return false;
}

// --- II. The Game's Main Processing Loop (The "Physics Engine") ---
export function mainGameLoop(all_ships: Ship[], rulebook: ReactionRulebook) {
    let reactions_occurred_in_pass = true;
    while (reactions_occurred_in_pass) {
        reactions_occurred_in_pass = false;

        for (const ship of all_ships) {
            for (const containerId in ship.all_containers) {
                const container = ship.all_containers[containerId];

                if (container.has_reacted_this_tick) {
                    continue;
                }

                const best_reaction_to_trigger = findValidReaction(container, rulebook);

                if (best_reaction_to_trigger) {
                    reactions_occurred_in_pass = true;
                    container.has_reacted_this_tick = true;

                    console.log(`REACTION: '${best_reaction_to_trigger.name}' triggered in ${container.id}.`);

                    for (const reagent_name in best_reaction_to_trigger.consumed_reagents) {
                        const amount = best_reaction_to_trigger.consumed_reagents[reagent_name];
                        container.reagents[reagent_name] -= amount;
                    }

                    for (const signal_name in best_reaction_to_trigger.produced_signals) {
                        const delta = best_reaction_to_trigger.produced_signals[signal_name];
                        container.adjustSignal(signal_name, delta);
                    }

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
}
