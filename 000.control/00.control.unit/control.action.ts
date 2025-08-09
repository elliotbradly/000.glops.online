import { Action } from "../99.core/interface/action.interface";
import  ControlBit  from "./fce/control.bit";

// Control actions

export const INIT_CONTROL = "[Control action] Init Control";
export class InitControl implements Action {
 readonly type = INIT_CONTROL;
 constructor(public bale: ControlBit) {}
}

export const UPDATE_CONTROL = "[Control action] Update Control";
export class UpdateControl implements Action {
 readonly type = UPDATE_CONTROL;
 constructor(public bale: ControlBit) {}
}

export const OPEN_CONTROL = "[Open action] Open Control";
 export class OpenControl implements Action {
 readonly type = OPEN_CONTROL;
 constructor(public bale: ControlBit) {}
 }
 
export const CREATE_CONTROL = "[Create action] Create Control";
 export class CreateControl implements Action {
 readonly type = CREATE_CONTROL;
 constructor(public bale: ControlBit) {}
 }
 
export const TEST_CONTROL = "[Test action] Test Control";
 export class TestControl implements Action {
 readonly type = TEST_CONTROL;
 constructor(public bale: ControlBit) {}
 }
 
export const ACCESS_CONTROL = "[Access action] Access Control";
 export class AccessControl implements Action {
 readonly type = ACCESS_CONTROL;
 constructor(public bale: ControlBit) {}
 }
 
export const OUTPUT_CONTROL = "[Output action] Output Control";
 export class OutputControl implements Action {
 readonly type = OUTPUT_CONTROL;
 constructor(public bale: ControlBit) {}
 }
 
export const ADVANCE_CONTROL = "[Advance action] Advance Control";
 export class AdvanceControl implements Action {
 readonly type = ADVANCE_CONTROL;
 constructor(public bale: ControlBit) {}
 }
 
export const INCREMENT_CONTROL = "[Increment action] Increment Control";
 export class IncrementControl implements Action {
 readonly type = INCREMENT_CONTROL;
 constructor(public bale: ControlBit) {}
 }

 export const DATA_CONTROL = "[Control action] Data Control";
 export class DataControl implements Action {
 readonly type = DATA_CONTROL;
 constructor(public bale: ControlBit) {}
 }
 
export type Actions = | InitControl | UpdateControl 
| OpenControl
| CreateControl
| TestControl
| AccessControl
| OutputControl
| AdvanceControl
| IncrementControl
| DataControl