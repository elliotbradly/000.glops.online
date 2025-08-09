import { Action } from "../99.core/interface/action.interface";
import  GlopBit  from "./fce/glop.bit";

// Glop actions

export const INIT_GLOP = "[Glop action] Init Glop";
export class InitGlop implements Action {
 readonly type = INIT_GLOP;
 constructor(public bale: GlopBit) {}
}

export const UPDATE_GLOP = "[Glop action] Update Glop";
export class UpdateGlop implements Action {
 readonly type = UPDATE_GLOP;
 constructor(public bale: GlopBit) {}
}

export const READ_GLOP = "[Read action] Read Glop";
 export class ReadGlop implements Action {
 readonly type = READ_GLOP;
 constructor(public bale: GlopBit) {}
 }
 
export const WRITE_GLOP = "[Write action] Write Glop";
 export class WriteGlop implements Action {
 readonly type = WRITE_GLOP;
 constructor(public bale: GlopBit) {}
 }
 
export const DELETE_GLOP = "[Delete action] Delete Glop";
 export class DeleteGlop implements Action {
 readonly type = DELETE_GLOP;
 constructor(public bale: GlopBit) {}
 }
 
export const CREATE_GLOP = "[Create action] Create Glop";
 export class CreateGlop implements Action {
 readonly type = CREATE_GLOP;
 constructor(public bale: GlopBit) {}
 }
 
export const REMOVE_GLOP = "[Remove action] Remove Glop";
 export class RemoveGlop implements Action {
 readonly type = REMOVE_GLOP;
 constructor(public bale: GlopBit) {}
 }
 
export type Actions = | InitGlop | UpdateGlop 
| ReadGlop
| WriteGlop
| DeleteGlop
| CreateGlop
| RemoveGlop