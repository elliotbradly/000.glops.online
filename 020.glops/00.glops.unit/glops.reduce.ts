import * as clone from "clone-deep";
import * as Act from "./glops.action";
import { GlopsModel } from "./glops.model";
import * as Buzz from "./glops.buzzer";
import State from "../99.core/state";

export function reducer(model: GlopsModel = new GlopsModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {

 case Act.UPDATE_GLOPS:
 return Buzz.updateGlops(clone(model), act.bale, state);

 case Act.INIT_GLOPS:
 return Buzz.initGlops(clone(model), act.bale, state);

 case Act.OPEN_GLOPS:
 return Buzz.openGlops(clone(model), act.bale, state);

case Act.ADVANCE_GLOPS:
 return Buzz.advanceGlops(clone(model), act.bale, state);

case Act.OUTPUT_GLOPS:
 return Buzz.outputGlops(clone(model), act.bale, state);

case Act.ACCESS_GLOPS:
 return Buzz.accessGlops(clone(model), act.bale, state);

 default:
 return model;
 }
}
