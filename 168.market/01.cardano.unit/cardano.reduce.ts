import * as clone from "clone-deep";
import * as Act from "./cardano.action";
import { CardanoModel } from "./cardano.model";
import * as Buzz from "./cardano.buzzer";
import State from "../99.core/state";

export function reducer(model: CardanoModel = new CardanoModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CARDANO:
 return Buzz.updateCardano(clone(model), act.bale, state);

 case Act.INIT_CARDANO:
 return Buzz.initCardano(clone(model), act.bale, state);

case Act.TEST_CARDANO:
 return Buzz.testCardano(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
