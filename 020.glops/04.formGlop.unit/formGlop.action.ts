import { Action } from "../../../995.library/99.core/interface/action.interface";
import  FormGlopBit  from "./fce/formGlop.bit";

// FormGlop actions

export const INIT_FORMGLOP = "[FormGlop action] Init FormGlop";
export class InitFormGlop implements Action {
 readonly type = INIT_FORMGLOP;
 constructor(public bale: FormGlopBit) {}
}

export const UPDATE_FORMGLOP = "[FormGlop action] Update FormGlop";
export class UpdateFormGlop implements Action {
 readonly type = UPDATE_FORMGLOP;
 constructor(public bale: FormGlopBit) {}
}

export const READ_FORMGLOP = "[Read action] Read FormGlop";
 export class ReadFormGlop implements Action {
 readonly type = READ_FORMGLOP;
 constructor(public bale: FormGlopBit) {}
 }

export const WRITE_FORMGLOP = "[Write action] Write FormGlop";
 export class WriteFormGlop implements Action {
 readonly type = WRITE_FORMGLOP;
 constructor(public bale: FormGlopBit) {}
 }

export const REMOVE_FORMGLOP = "[Remove action] Remove FormGlop";
 export class RemoveFormGlop implements Action {
 readonly type = REMOVE_FORMGLOP;
 constructor(public bale: FormGlopBit) {}
 }

export const DELETE_FORMGLOP = "[Delete action] Delete FormGlop";
 export class DeleteFormGlop implements Action {
 readonly type = DELETE_FORMGLOP;
 constructor(public bale: FormGlopBit) {}
 }

export const CREATE_FORMGLOP = "[Create action] Create FormGlop";
 export class CreateFormGlop implements Action {
 readonly type = CREATE_FORMGLOP;
 constructor(public bale: FormGlopBit) {}
 }

export type Actions = | InitFormGlop | UpdateFormGlop
| ReadFormGlop
| WriteFormGlop
| RemoveFormGlop
| DeleteFormGlop
| CreateFormGlop
