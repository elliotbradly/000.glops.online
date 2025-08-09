import { Action } from "../99.core/interface/action.interface";
import  CodexBit  from "./fce/codex.bit";

// Codex actions

export const INIT_CODEX = "[Codex action] Init Codex";
export class InitCodex implements Action {
 readonly type = INIT_CODEX;
 constructor(public bale: CodexBit) {}
}

export const UPDATE_CODEX = "[Codex action] Update Codex";
export class UpdateCodex implements Action {
 readonly type = UPDATE_CODEX;
 constructor(public bale: CodexBit) {}
}

export type Actions = | InitCodex | UpdateCodex ;
