import * as clone from "clone-deep";
import * as Act from "./codex.action";
import { CodexModel } from "./codex.model";
import * as Buzz from "./codex.buzzer";
import State from "../99.core/state";

export function reducer(model: CodexModel = new CodexModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CODEX:
 return Buzz.updateCodex(clone(model), act.bale, state);

 case Act.INIT_CODEX:
 return Buzz.initCodex(clone(model), act.bale, state);

 default:
 return model;
 }
}
