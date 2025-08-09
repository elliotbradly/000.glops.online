import { Action } from "../99.core/interface/action.interface";
import  BabylonBit  from "./fce/babylon.bit";

// Babylon actions

export const INIT_BABYLON = "[Babylon action] Init Babylon";
export class InitBabylon implements Action {
 readonly type = INIT_BABYLON;
 constructor(public bale: BabylonBit) {}
}

export const UPDATE_BABYLON = "[Babylon action] Update Babylon";
export class UpdateBabylon implements Action {
 readonly type = UPDATE_BABYLON;
 constructor(public bale: BabylonBit) {}
}

export const OPEN_BABYLON = "[Babylon action] Open Babylon";
export class OpenBabylon implements Action {
 readonly type = OPEN_BABYLON;
 constructor(public bale: BabylonBit) {}
}

export const RECORD_BABYLON = "[Babylon action] Record Babylon";
export class RecordBabylon implements Action {
 readonly type = RECORD_BABYLON;
 constructor(public bale: BabylonBit) {}
}


export const ACTION_BABYLON = "[Babylon action] Action Babylon";
export class ActionBabylon implements Action {
 readonly type = ACTION_BABYLON;
 constructor(public bale: BabylonBit) {}
}


export const CUT_BABYLON = "[Babylon action] Cut Babylon";
export class CutBabylon implements Action {
 readonly type = CUT_BABYLON;
 constructor(public bale: BabylonBit) {}
}

export const CAMERA_BABYLON = "[Babylon action] Cut Babylon";
export class CameraBabylon implements Action {
 readonly type = CAMERA_BABYLON;
 constructor(public bale: BabylonBit) {}
}

export type Actions = | InitBabylon | UpdateBabylon | OpenBabylon | RecordBabylon 
| ActionBabylon
| CutBabylon
| CameraBabylon
;
