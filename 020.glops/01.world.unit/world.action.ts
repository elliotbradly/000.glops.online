import { Action } from "../99.core/interface/action.interface";
import  WorldBit  from "./fce/world.bit";

// World actions

export const INIT_WORLD = "[World action] Init World";
export class InitWorld implements Action {
 readonly type = INIT_WORLD;
 constructor(public bale: WorldBit) {}
}

export const UPDATE_WORLD = "[World action] Update World";
export class UpdateWorld implements Action {
 readonly type = UPDATE_WORLD;
 constructor(public bale: WorldBit) {}
}

export const READ_WORLD = "[Read action] Read World";
 export class ReadWorld implements Action {
 readonly type = READ_WORLD;
 constructor(public bale: WorldBit) {}
 }

export const WRITE_WORLD = "[Write action] Write World";
 export class WriteWorld implements Action {
 readonly type = WRITE_WORLD;
 constructor(public bale: WorldBit) {}
 }

export const REMOVE_WORLD = "[Remove action] Remove World";
 export class RemoveWorld implements Action {
 readonly type = REMOVE_WORLD;
 constructor(public bale: WorldBit) {}
 }

export const DELETE_WORLD = "[Delete action] Delete World";
 export class DeleteWorld implements Action {
 readonly type = DELETE_WORLD;
 constructor(public bale: WorldBit) {}
 }

export const CREATE_WORLD = "[Create action] Create World";
 export class CreateWorld implements Action {
 readonly type = CREATE_WORLD;
 constructor(public bale: WorldBit) {}
 }

export type Actions = | InitWorld | UpdateWorld
| ReadWorld
| WriteWorld
| RemoveWorld
| DeleteWorld
| CreateWorld
