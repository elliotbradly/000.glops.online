import * as clone from "clone-deep";
import * as Act from "./world.action";
import { WorldModel } from "./world.model";
import * as Buzz from "./world.buzzer";
import State from "../99.core/state";

export function reducer(model: WorldModel = new WorldModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {

 case Act.UPDATE_WORLD:
 return Buzz.updateWorld(clone(model), act.bale, state);

 case Act.INIT_WORLD:
 return Buzz.initWorld(clone(model), act.bale, state);

case Act.READ_WORLD:
 return Buzz.readWorld(clone(model), act.bale, state);

case Act.WRITE_WORLD:
 return Buzz.writeWorld(clone(model), act.bale, state);

case Act.REMOVE_WORLD:
 return Buzz.removeWorld(clone(model), act.bale, state);

case Act.DELETE_WORLD:
 return Buzz.deleteWorld(clone(model), act.bale, state);

case Act.CREATE_WORLD:
 return Buzz.createWorld(clone(model), act.bale, state);

 default:
 return model;
 }
}
