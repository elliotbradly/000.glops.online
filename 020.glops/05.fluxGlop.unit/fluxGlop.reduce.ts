import * as clone from "clone-deep";
import * as Act from "./fluxGlop.action";
import { FluxGlopModel } from "./fluxGlop.model";
import * as Buzz from "./fluxGlop.buzzer";
import State from "../99.core/state";

export function reducer(model: FluxGlopModel = new FluxGlopModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {

 case Act.UPDATE_FLUXGLOP:
 return Buzz.updateFluxGlop(clone(model), act.bale, state);

 case Act.INIT_FLUXGLOP:
 return Buzz.initFluxGlop(clone(model), act.bale, state);

case Act.READ_FLUXGLOP:
 return Buzz.readFluxGlop(clone(model), act.bale, state);

case Act.WRITE_FLUXGLOP:
 return Buzz.writeFluxGlop(clone(model), act.bale, state);

case Act.REMOVE_FLUXGLOP:
 return Buzz.removeFluxGlop(clone(model), act.bale, state);

case Act.DELETE_FLUXGLOP:
 return Buzz.deleteFluxGlop(clone(model), act.bale, state);

case Act.CREATE_FLUXGLOP:
 return Buzz.createFluxGlop(clone(model), act.bale, state);

 default:
 return model;
 }
}
