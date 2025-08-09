import { Action } from "../99.core/interface/action.interface";
import  MarketBit  from "./fce/market.bit";

// Market actions

export const INIT_MARKET = "[Market action] Init Market";
export class InitMarket implements Action {
 readonly type = INIT_MARKET;
 constructor(public bale: MarketBit) {}
}

export const UPDATE_MARKET = "[Market action] Update Market";
export class UpdateMarket implements Action {
 readonly type = UPDATE_MARKET;
 constructor(public bale: MarketBit) {}
}

export type Actions = | InitMarket | UpdateMarket ;
