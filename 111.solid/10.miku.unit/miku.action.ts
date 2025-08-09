import { Action } from "../99.core/interface/action.interface";
import  MikuBit  from "./fce/miku.bit";

// Miku actions

export const INIT_MIKU = "[Miku action] Init Miku";
export class InitMiku implements Action {
 readonly type = INIT_MIKU;
 constructor(public bale: MikuBit) {}
}

export const UPDATE_MIKU = "[Miku action] Update Miku";
export class UpdateMiku implements Action {
 readonly type = UPDATE_MIKU;
 constructor(public bale: MikuBit) {}
}

export const READ_MIKU = "[Miku action] Read Miku";
export class ReadMiku implements Action {
 readonly type = READ_MIKU;
 constructor(public bale: MikuBit) {}
}

export const WRITE_MIKU = "[Miku action] Write Miku";
export class WriteMiku implements Action {
 readonly type = WRITE_MIKU;
 constructor(public bale: MikuBit) {}
}

export const DELETE_MIKU = "[Miku action] Delete Miku";
export class DeleteMiku implements Action {
 readonly type = DELETE_MIKU;
 constructor(public bale: MikuBit) {}
}

export const REMOVE_MIKU = "[Miku action] Remove Miku";
export class RemoveMiku implements Action {
 readonly type = REMOVE_MIKU;
 constructor(public bale: MikuBit) {}
}

export const CREATE_MIKU = "[Miku action] Create Miku";
export class CreateMiku implements Action {
 readonly type = CREATE_MIKU;
 constructor(public bale: MikuBit) {}
}


export type Actions = | InitMiku | UpdateMiku | ReadMiku | WriteMiku | DeleteMiku | RemoveMiku | CreateMiku;
