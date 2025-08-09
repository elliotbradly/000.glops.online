import * as clone from "clone-deep";
import * as Act from "./light.action";
import { LightModel } from "./light.model";
import * as Buzz from "./light.buzzer";
import State from "../99.core/state";

export function reducer(model: LightModel = new LightModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_LIGHT:
 return Buzz.updateLight(clone(model), act.bale, state);

 case Act.INIT_LIGHT:
 return Buzz.initLight(clone(model), act.bale, state);

case Act.READ_LIGHT:
 return Buzz.readLight(clone(model), act.bale, state);
 
case Act.WRITE_LIGHT:
 return Buzz.writeLight(clone(model), act.bale, state);
 
case Act.REMOVE_LIGHT:
 return Buzz.removeLight(clone(model), act.bale, state);
 
case Act.DELETE_LIGHT:
 return Buzz.deleteLight(clone(model), act.bale, state);
 
case Act.CREATE_LIGHT:
 return Buzz.createLight(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
