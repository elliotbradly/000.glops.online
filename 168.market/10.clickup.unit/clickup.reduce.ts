import * as clone from "clone-deep";
import * as Act from "./clickup.action";
import { ClickupModel } from "./clickup.model";
import * as Buzz from "./clickup.buzzer";
import State from "../99.core/state";

export function reducer(model: ClickupModel = new ClickupModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CLICKUP:
 return Buzz.updateClickup(clone(model), act.bale, state);

 case Act.INIT_CLICKUP:
 return Buzz.initClickup(clone(model), act.bale, state);

 default:
 return model;
 }
}
