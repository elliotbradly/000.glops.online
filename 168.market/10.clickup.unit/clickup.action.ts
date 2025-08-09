import { Action } from "../99.core/interface/action.interface";
import  ClickupBit  from "./fce/clickup.bit";

// Clickup actions

export const INIT_CLICKUP = "[Clickup action] Init Clickup";
export class InitClickup implements Action {
 readonly type = INIT_CLICKUP;
 constructor(public bale: ClickupBit) {}
}

export const UPDATE_CLICKUP = "[Clickup action] Update Clickup";
export class UpdateClickup implements Action {
 readonly type = UPDATE_CLICKUP;
 constructor(public bale: ClickupBit) {}
}

export type Actions = | InitClickup | UpdateClickup ;
