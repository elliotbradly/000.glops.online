import { Action } from "../99.core/interface/action.interface";
import  ReactionBit  from "./fce/reaction.bit";

// Reaction actions

export const INIT_REACTION = "[Reaction action] Init Reaction";
export class InitReaction implements Action {
 readonly type = INIT_REACTION;
 constructor(public bale: ReactionBit) {}
}

export const UPDATE_REACTION = "[Reaction action] Update Reaction";
export class UpdateReaction implements Action {
 readonly type = UPDATE_REACTION;
 constructor(public bale: ReactionBit) {}
}

export type Actions = | InitReaction | UpdateReaction ;
