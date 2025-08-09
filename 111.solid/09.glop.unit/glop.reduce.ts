import * as clone from "clone-deep";
import * as Act from "./glop.action";
import { GlopModel } from "./glop.model";
import * as Buzz from "./glop.buzzer";
import State from "../99.core/state";

export function reducer(model: GlopModel = new GlopModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GLOP:
 return Buzz.updateGlop(clone(model), act.bale, state);

 case Act.INIT_GLOP:
 return Buzz.initGlop(clone(model), act.bale, state);

case Act.READ_GLOP:
 return Buzz.readGlop(clone(model), act.bale, state);
 
case Act.WRITE_GLOP:
 return Buzz.writeGlop(clone(model), act.bale, state);
 
case Act.DELETE_GLOP:
 return Buzz.deleteGlop(clone(model), act.bale, state);
 
case Act.CREATE_GLOP:
 return Buzz.createGlop(clone(model), act.bale, state);
 
case Act.REMOVE_GLOP:
 return Buzz.removeGlop(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
