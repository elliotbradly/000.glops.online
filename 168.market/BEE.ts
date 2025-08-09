import Model from "./99.core/interface/model.interface";

import MarketUnit from "./00.market.unit/market.unit";
import CardanoUnit from "./01.cardano.unit/cardano.unit";
import WalletUnit from "./02.wallet.unit/wallet.unit";
import ClickupUnit from "./10.clickup.unit/clickup.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Market from "./00.market.unit/fce/market.interface";
import { MarketModel } from "./00.market.unit/market.model";
import Cardano from "./01.cardano.unit/fce/cardano.interface";
import { CardanoModel } from "./01.cardano.unit/cardano.model";
import Wallet from "./02.wallet.unit/fce/wallet.interface";
import { WalletModel } from "./02.wallet.unit/wallet.model";
import Clickup from "./10.clickup.unit/fce/clickup.interface";
import { ClickupModel } from "./10.clickup.unit/clickup.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [MarketUnit,CardanoUnit,WalletUnit,ClickupUnit,CollectUnit,BusUnit];

import * as reduceFromMarket from "./00.market.unit/market.reduce";
import * as reduceFromCardano from "./01.cardano.unit/cardano.reduce";
import * as reduceFromWallet from "./02.wallet.unit/wallet.reduce";
import * as reduceFromClickup from "./10.clickup.unit/clickup.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 market : reduceFromMarket.reducer, 
cardano : reduceFromCardano.reducer, 
wallet : reduceFromWallet.reducer, 
clickup : reduceFromClickup.reducer, 
collect : reduceFromCollect.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 market : Market = new MarketModel();
cardano : Cardano = new CardanoModel();
wallet : Wallet = new WalletModel();
clickup : Clickup = new ClickupModel();
collect : Collect = new CollectModel();
bus : Bus = new BusModel();

 
}
