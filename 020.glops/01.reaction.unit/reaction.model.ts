import Reaction from "./fce/reaction.interface";
import ReactionBit from "./fce/reaction.interface";

export class ReactionModel implements Reaction {
 //idx:string;
 //reactionBitList: ReactionBit[] = [];
 //reactionBits: any = {};
}

// --- 2. THE CHEMICAL CONTAINER (The fundamental building block) ---
// Every component on a ship is a ChemicalContainer.

export class ChemicalContainer {
    id: string;
    parent_ship: Ship;
    adjacent_containers: ChemicalContainer[] = [];

    // The chemicals currently inside this container.
    signals: Record<string, number> = {};
    reagents: Record<string, number> = {};

    // A flag to prevent infinite loops in one tick.
    has_reacted_this_tick: boolean = false;

    constructor(id: string, parent_ship: Ship) {
        this.id = id;
        this.parent_ship = parent_ship;
    }

    // --- METHODS ---
    addReagent(reagent_name: string, amount: number) {
        this.reagents[reagent_name] = (this.reagents[reagent_name] || 0) + amount;
    }

    setSignal(signal_name: string, value: number) {
        this.signals[signal_name] = value;
    }

    adjustSignal(signal_name: string, delta: string) {
        const current_value = this.signals[signal_name] || 0;
        const change = parseFloat(delta);
        this.signals[signal_name] = current_value + change;
    }
}


// --- 3. THE SHIP (A collection of containers) ---
export class Ship {
    id: string;
    status: string;
    all_containers: Record<string, ChemicalContainer> = {};

    constructor(id: string, status: string = "Operational") {
        this.id = id;
        this.status = status;
    }

    getContainerByID(id: string): ChemicalContainer | undefined {
        return this.all_containers[id];
    }

    addContainer(id: string): ChemicalContainer {
        const container = new ChemicalContainer(id, this);
        this.all_containers[id] = container;
        return container;
    }
}
