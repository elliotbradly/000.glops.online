import { Action } from "../99.core/interface/action.interface";
import  FluxGlopBit  from "./fce/fluxGlop.bit";

// FluxGlop actions

export const INIT_FLUXGLOP = "[FluxGlop action] Init FluxGlop";
export class InitFluxGlop implements Action {
 readonly type = INIT_FLUXGLOP;
 constructor(public bale: FluxGlopBit) {}
}

export const UPDATE_FLUXGLOP = "[FluxGlop action] Update FluxGlop";
export class UpdateFluxGlop implements Action {
 readonly type = UPDATE_FLUXGLOP;
 constructor(public bale: FluxGlopBit) {}
}

export const READ_FLUXGLOP = "[Read action] Read FluxGlop";
 export class ReadFluxGlop implements Action {
 readonly type = READ_FLUXGLOP;
 constructor(public bale: FluxGlopBit) {}
 }

export const WRITE_FLUXGLOP = "[Write action] Write FluxGlop";
 export class WriteFluxGlop implements Action {
 readonly type = WRITE_FLUXGLOP;
 constructor(public bale: FluxGlopBit) {}
 }

export const REMOVE_FLUXGLOP = "[Remove action] Remove FluxGlop";
 export class RemoveFluxGlop implements Action {
 readonly type = REMOVE_FLUXGLOP;
 constructor(public bale: FluxGlopBit) {}
 }

export const DELETE_FLUXGLOP = "[Delete action] Delete FluxGlop";
 export class DeleteFluxGlop implements Action {
 readonly type = DELETE_FLUXGLOP;
 constructor(public bale: FluxGlopBit) {}
 }

export const CREATE_FLUXGLOP = "[Create action] Create FluxGlop";
 export class CreateFluxGlop implements Action {
 readonly type = CREATE_FLUXGLOP;
 constructor(public bale: FluxGlopBit) {}
 }

export type Actions = | InitFluxGlop | UpdateFluxGlop
| ReadFluxGlop
| WriteFluxGlop
| RemoveFluxGlop
| DeleteFluxGlop
| CreateFluxGlop
