import { Action } from "../99.core/interface/action.interface";
import  TurnBit  from "./fce/turn.bit";

// Turn actions

export const INIT_TURN = "[Turn action] Init Turn";
export class InitTurn implements Action {
 readonly type = INIT_TURN;
 constructor(public bale: TurnBit) {}
}

export const UPDATE_TURN = "[Turn action] Update Turn";
export class UpdateTurn implements Action {
 readonly type = UPDATE_TURN;
 constructor(public bale: TurnBit) {}
}

export const OPEN_TURN = "[Open action] Open Turn";
 export class OpenTurn implements Action {
 readonly type = OPEN_TURN;
 constructor(public bale: TurnBit) {}
 }
 
export const READ_TURN = "[Read action] Read Turn";
 export class ReadTurn implements Action {
 readonly type = READ_TURN;
 constructor(public bale: TurnBit) {}
 }
 
export const START_TURN = "[Start action] Start Turn";
 export class StartTurn implements Action {
 readonly type = START_TURN;
 constructor(public bale: TurnBit) {}
 }
 
export type Actions = | InitTurn | UpdateTurn 
| OpenTurn
| ReadTurn
| StartTurn