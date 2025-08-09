import * as clone from "clone-deep";
import * as Act from "./turn.action";
import { TurnModel } from "./turn.model";
import * as Buzz from "./turn.buzzer";
import State from "../99.core/state";

export function reducer(model: TurnModel = new TurnModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_TURN:
 return Buzz.updateTurn(clone(model), act.bale, state);

 case Act.INIT_TURN:
 return Buzz.initTurn(clone(model), act.bale, state);

case Act.OPEN_TURN:
 return Buzz.openTurn(clone(model), act.bale, state);
 
case Act.READ_TURN:
 return Buzz.readTurn(clone(model), act.bale, state);
 
case Act.START_TURN:
 return Buzz.startTurn(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
