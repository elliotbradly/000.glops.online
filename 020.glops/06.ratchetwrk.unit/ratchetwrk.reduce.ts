import * as clone from "clone-deep";
import * as Act from "./ratchetwrk.action";
import { RatchetwrkModel } from "./ratchetwrk.model";
import * as Buzz from "./ratchetwrk.buzzer";
import State from "../99.core/state";

export function reducer(model: RatchetwrkModel = new RatchetwrkModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {

 case Act.UPDATE_RATCHETWRK:
 return Buzz.updateRatchetwrk(clone(model), act.bale, state);

 case Act.INIT_RATCHETWRK:
 return Buzz.initRatchetwrk(clone(model), act.bale, state);

case Act.READ_RATCHETWRK:
 return Buzz.readRatchetwrk(clone(model), act.bale, state);

case Act.WRITE_RATCHETWRK:
 return Buzz.writeRatchetwrk(clone(model), act.bale, state);

case Act.REMOVE_RATCHETWRK:
 return Buzz.removeRatchetwrk(clone(model), act.bale, state);

case Act.DELETE_RATCHETWRK:
 return Buzz.deleteRatchetwrk(clone(model), act.bale, state);

case Act.CREATE_RATCHETWRK:
 return Buzz.createRatchetwrk(clone(model), act.bale, state);

 default:
 return model;
 }
}
