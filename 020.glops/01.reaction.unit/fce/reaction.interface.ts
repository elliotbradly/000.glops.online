import  ReactionBit  from "./reaction.bit";

export default interface Reaction {
 // idx:string;
 // reactionBitList: ReactionBit[];
 // reactionBits:any;
}


// --- I. Core Data Structures ---

// --- 1. THE REACTION RULEBOOK (Data, not Code) ---
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
export type ReactionRulebook = ReactionRule[];

// Example Rulebook
export const reactionRulebook: ReactionRulebook = [
    {
        name: "Thermal Shock",
        required_signals: { "HEAT": 4000, "STRUCTURAL_STRESS": 10 },
        required_reagents: { "CRYO": 1 },
        consumed_reagents: { "CRYO": 1 },
        produced_signals: { "STRUCTURAL_STRESS": "+50" },
        produced_reagents: { "FRACTURE_EVENT": 1 },
        priority: 10,
    },
    {
        name: "Coolant Failure",
        required_signals: { "HEAT": 2000 },
        required_reagents: {},
        consumed_reagents: {},
        produced_signals: { "HEAT": "+1000" },
        produced_reagents: {},
        priority: 5,
    }
];
