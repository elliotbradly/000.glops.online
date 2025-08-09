import * as Act from "./solid.action";
import { SolidModel } from "./solid.model";
import * as Buzz from "./solid.buzzer";
import State from "../99.core/state";


export function reducer(model: SolidModel = new SolidModel(), act: Act.Actions,  state?: State ) {
 
    var clone = require('clone-deep');

switch (act.type) {
 
 case Act.UPDATE_SOLID:
 return Buzz.updateSolid(clone(model), act.bale, state);

 case Act.INIT_SOLID:
 return Buzz.initSolid(clone(model), act.bale, state);

case Act.SHADE_SOLID:
 return Buzz.shadeSolid(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
