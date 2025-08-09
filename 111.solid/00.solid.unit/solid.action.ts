import { Action } from "../99.core/interface/action.interface";
import  SolidBit  from "./fce/solid.bit";

// Solid actions

export const INIT_SOLID = "[Solid action] Init Solid";
export class InitSolid implements Action {
 readonly type = INIT_SOLID;
 constructor(public bale: SolidBit) {}
}

export const UPDATE_SOLID = "[Solid action] Update Solid";
export class UpdateSolid implements Action {
 readonly type = UPDATE_SOLID;
 constructor(public bale: SolidBit) {}
}

export const SHADE_SOLID = "[Shade action] Shade Solid";
 export class ShadeSolid implements Action {
 readonly type = SHADE_SOLID;
 constructor(public bale: SolidBit) {}
 }
 
export type Actions = | InitSolid | UpdateSolid 
| ShadeSolid