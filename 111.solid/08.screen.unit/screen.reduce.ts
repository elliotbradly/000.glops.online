import * as clone from "clone-deep";
import * as Act from "./screen.action";
import { ScreenModel } from "./screen.model";
import * as Buzz from "./screen.buzzer";
import State from "../99.core/state";

export function reducer(model: ScreenModel = new ScreenModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SCREEN:
 return Buzz.updateScreen(clone(model), act.bale, state);

 case Act.INIT_SCREEN:
 return Buzz.initScreen(clone(model), act.bale, state);

case Act.READ_SCREEN:
 return Buzz.readScreen(clone(model), act.bale, state);
 
case Act.WRITE_SCREEN:
 return Buzz.writeScreen(clone(model), act.bale, state);
 
case Act.REMOVE_SCREEN:
 return Buzz.removeScreen(clone(model), act.bale, state);
 
case Act.DELETE_SCREEN:
 return Buzz.deleteScreen(clone(model), act.bale, state);
 
case Act.CREATE_SCREEN:
 return Buzz.createScreen(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
