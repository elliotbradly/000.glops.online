import * as clone from "clone-deep";
import * as Act from "./formGlop.action";
import { FormGlopModel } from "./formGlop.model";
import * as Buzz from "./formGlop.buzzer";
import State from "../99.core/state";

export function reducer(model: FormGlopModel = new FormGlopModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {

 case Act.UPDATE_FORMGLOP:
 return Buzz.updateFormGlop(clone(model), act.bale, state);

 case Act.INIT_FORMGLOP:
 return Buzz.initFormGlop(clone(model), act.bale, state);

case Act.READ_FORMGLOP:
 return Buzz.readFormGlop(clone(model), act.bale, state);

case Act.WRITE_FORMGLOP:
 return Buzz.writeFormGlop(clone(model), act.bale, state);

case Act.REMOVE_FORMGLOP:
 return Buzz.removeFormGlop(clone(model), act.bale, state);

case Act.DELETE_FORMGLOP:
 return Buzz.deleteFormGlop(clone(model), act.bale, state);

case Act.CREATE_FORMGLOP:
 return Buzz.createFormGlop(clone(model), act.bale, state);

 default:
 return model;
 }
}
