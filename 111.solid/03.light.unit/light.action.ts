import { Action } from "../99.core/interface/action.interface";
import  LightBit  from "./fce/light.bit";

// Light actions

export const INIT_LIGHT = "[Light action] Init Light";
export class InitLight implements Action {
 readonly type = INIT_LIGHT;
 constructor(public bale: LightBit) {}
}

export const UPDATE_LIGHT = "[Light action] Update Light";
export class UpdateLight implements Action {
 readonly type = UPDATE_LIGHT;
 constructor(public bale: LightBit) {}
}

export const READ_LIGHT = "[Read action] Read Light";
 export class ReadLight implements Action {
 readonly type = READ_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const WRITE_LIGHT = "[Write action] Write Light";
 export class WriteLight implements Action {
 readonly type = WRITE_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const REMOVE_LIGHT = "[Remove action] Remove Light";
 export class RemoveLight implements Action {
 readonly type = REMOVE_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const DELETE_LIGHT = "[Delete action] Delete Light";
 export class DeleteLight implements Action {
 readonly type = DELETE_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const CREATE_LIGHT = "[Create action] Create Light";
 export class CreateLight implements Action {
 readonly type = CREATE_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export type Actions = | InitLight | UpdateLight 
| ReadLight
| WriteLight
| RemoveLight
| DeleteLight
| CreateLight