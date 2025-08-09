import { Action } from "../99.core/interface/action.interface";
import  WalletBit  from "./fce/wallet.bit";

// Wallet actions

export const INIT_WALLET = "[Wallet action] Init Wallet";
export class InitWallet implements Action {
 readonly type = INIT_WALLET;
 constructor(public bale: WalletBit) {}
}

export const UPDATE_WALLET = "[Wallet action] Update Wallet";
export class UpdateWallet implements Action {
 readonly type = UPDATE_WALLET;
 constructor(public bale: WalletBit) {}
}

export const READ_WALLET = "[Read action] Read Wallet";
 export class ReadWallet implements Action {
 readonly type = READ_WALLET;
 constructor(public bale: WalletBit) {}
 }
 
export const WRITE_WALLET = "[Write action] Write Wallet";
 export class WriteWallet implements Action {
 readonly type = WRITE_WALLET;
 constructor(public bale: WalletBit) {}
 }
 
export const REMOVE_WALLET = "[Remove action] Remove Wallet";
 export class RemoveWallet implements Action {
 readonly type = REMOVE_WALLET;
 constructor(public bale: WalletBit) {}
 }
 
export const DELETE_WALLET = "[Delete action] Delete Wallet";
 export class DeleteWallet implements Action {
 readonly type = DELETE_WALLET;
 constructor(public bale: WalletBit) {}
 }
 
export const CREATE_WALLET = "[Create action] Create Wallet";
 export class CreateWallet implements Action {
 readonly type = CREATE_WALLET;
 constructor(public bale: WalletBit) {}
 }
 
export type Actions = | InitWallet | UpdateWallet 
| ReadWallet
| WriteWallet
| RemoveWallet
| DeleteWallet
| CreateWallet