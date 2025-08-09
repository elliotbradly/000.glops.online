import { Action } from "../99.core/interface/action.interface";
import  ScreenBit  from "./fce/screen.bit";

// Screen actions

export const INIT_SCREEN = "[Screen action] Init Screen";
export class InitScreen implements Action {
 readonly type = INIT_SCREEN;
 constructor(public bale: ScreenBit) {}
}

export const UPDATE_SCREEN = "[Screen action] Update Screen";
export class UpdateScreen implements Action {
 readonly type = UPDATE_SCREEN;
 constructor(public bale: ScreenBit) {}
}

export const READ_SCREEN = "[Read action] Read Screen";
 export class ReadScreen implements Action {
 readonly type = READ_SCREEN;
 constructor(public bale: ScreenBit) {}
 }
 
export const WRITE_SCREEN = "[Write action] Write Screen";
 export class WriteScreen implements Action {
 readonly type = WRITE_SCREEN;
 constructor(public bale: ScreenBit) {}
 }
 
export const REMOVE_SCREEN = "[Remove action] Remove Screen";
 export class RemoveScreen implements Action {
 readonly type = REMOVE_SCREEN;
 constructor(public bale: ScreenBit) {}
 }
 
export const DELETE_SCREEN = "[Delete action] Delete Screen";
 export class DeleteScreen implements Action {
 readonly type = DELETE_SCREEN;
 constructor(public bale: ScreenBit) {}
 }
 
export const CREATE_SCREEN = "[Create action] Create Screen";
 export class CreateScreen implements Action {
 readonly type = CREATE_SCREEN;
 constructor(public bale: ScreenBit) {}
 }
 
export type Actions = | InitScreen | UpdateScreen 
| ReadScreen
| WriteScreen
| RemoveScreen
| DeleteScreen
| CreateScreen