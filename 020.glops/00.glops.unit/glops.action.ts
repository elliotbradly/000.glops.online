import { Action } from "../99.core/interface/action.interface";
import  GlopsBit  from "./fce/glops.bit";

// glops actions

export const INIT_GLOPS = "[glops action] Init glops";
export class InitGlops implements Action {
 readonly type = INIT_GLOPS;
 constructor(public bale: GlopsBit) {}
}

export const OPEN_GLOPS = "[glops action] Open glops";
export class OpenGlops implements Action {
 readonly type = OPEN_GLOPS;
 constructor(public bale: GlopsBit) {}
}

export const UPDATE_GLOPS = "[glops action] Update glops";
export class UpdateGlops implements Action {
 readonly type = UPDATE_GLOPS;
 constructor(public bale: GlopsBit) {}
}

export const ADVANCE_GLOPS = "[Advance action] Advance glops";
 export class AdvanceGlops implements Action {
 readonly type = ADVANCE_GLOPS;
 constructor(public bale: GlopsBit) {}
 }

export const OUTPUT_GLOPS = "[Output action] Output glops";
 export class OutputGlops implements Action {
 readonly type = OUTPUT_GLOPS;
 constructor(public bale: GlopsBit) {}
 }

export const ACCESS_GLOPS = "[Access action] Access glops";
 export class AccessGlops implements Action {
 readonly type = ACCESS_GLOPS;
 constructor(public bale: GlopsBit) {}
 }

export const TEST_GLOPS = "[Test action] Test Glops";
 export class TestGlops implements Action {
 readonly type = TEST_GLOPS;
 constructor(public bale: GlopsBit) {}
 }
 
export type Actions = | InitGlops | UpdateGlops | OpenGlops
| AdvanceGlops
| OutputGlops
| AccessGlops
| TestGlops