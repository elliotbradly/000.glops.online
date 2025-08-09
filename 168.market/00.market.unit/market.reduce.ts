import * as clone from "clone-deep";
import * as Act from "./market.action";
import { MarketModel } from "./market.model";
import * as Buzz from "./market.buzzer";
import State from "../99.core/state";

export function reducer(model: MarketModel = new MarketModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_MARKET:
 return Buzz.updateMarket(clone(model), act.bale, state);

 case Act.INIT_MARKET:
 return Buzz.initMarket(clone(model), act.bale, state);

 default:
 return model;
 }
}
