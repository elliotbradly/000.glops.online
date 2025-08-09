import { Action } from "../99.core/interface/action.interface";
import  CardanoBit  from "./fce/cardano.bit";

// Cardano actions

export const INIT_CARDANO = "[Cardano action] Init Cardano";
export class InitCardano implements Action {
 readonly type = INIT_CARDANO;
 constructor(public bale: CardanoBit) {}
}

export const UPDATE_CARDANO = "[Cardano action] Update Cardano";
export class UpdateCardano implements Action {
 readonly type = UPDATE_CARDANO;
 constructor(public bale: CardanoBit) {}
}

export const TEST_CARDANO = "[Test action] Test Cardano";
 export class TestCardano implements Action {
 readonly type = TEST_CARDANO;
 constructor(public bale: CardanoBit) {}
 }
 
export type Actions = | InitCardano | UpdateCardano 
| TestCardano