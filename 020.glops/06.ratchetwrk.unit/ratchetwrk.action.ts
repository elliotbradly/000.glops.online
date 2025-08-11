import { Action } from "../99.core/interface/action.interface";
import  RatchetwrkBit  from "./fce/ratchetwrk.bit";

// Ratchetwrk actions

export const INIT_RATCHETWRK = "[Ratchetwrk action] Init Ratchetwrk";
export class InitRatchetwrk implements Action {
 readonly type = INIT_RATCHETWRK;
 constructor(public bale: RatchetwrkBit) {}
}

export const UPDATE_RATCHETWRK = "[Ratchetwrk action] Update Ratchetwrk";
export class UpdateRatchetwrk implements Action {
 readonly type = UPDATE_RATCHETWRK;
 constructor(public bale: RatchetwrkBit) {}
}

export const READ_RATCHETWRK = "[Read action] Read Ratchetwrk";
 export class ReadRatchetwrk implements Action {
 readonly type = READ_RATCHETWRK;
 constructor(public bale: RatchetwrkBit) {}
 }

export const WRITE_RATCHETWRK = "[Write action] Write Ratchetwrk";
 export class WriteRatchetwrk implements Action {
 readonly type = WRITE_RATCHETWRK;
 constructor(public bale: RatchetwrkBit) {}
 }

export const REMOVE_RATCHETWRK = "[Remove action] Remove Ratchetwrk";
 export class RemoveRatchetwrk implements Action {
 readonly type = REMOVE_RATCHETWRK;
 constructor(public bale: RatchetwrkBit) {}
 }

export const DELETE_RATCHETWRK = "[Delete action] deleteRatchetwrk";
 export class DeleteRatchetwrk implements Action {
 readonly type = DELETE_RATCHETWRK;
 constructor(public bale: RatchetwrkBit) {}
 }

export const CREATE_RATCHETWRK = "[Create action] Create Ratchetwrk";
 export class CreateRatchetwrk implements Action {
 readonly type = CREATE_RATCHETWRK;
 constructor(public bale: RatchetwrkBit) {}
 }

export const TEST_RATCHETWRK = "[Test action] Test Ratchetwrk";
 export class TestRatchetwrk implements Action {
 readonly type = TEST_RATCHETWRK;
 constructor(public bale: RatchetwrkBit) {}
 }
 
export type Actions = | InitRatchetwrk | UpdateRatchetwrk
| ReadRatchetwrk
| WriteRatchetwrk
| RemoveRatchetwrk
| DeleteRatchetwrk
| CreateRatchetwrk
| TestRatchetwrk