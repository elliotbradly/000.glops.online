import * as Act from "./miku.action";
import { MikuModel } from "./miku.model";
import * as Buzz from "./miku.buzzer";
import State from "../99.core/state";

export function reducer(model: MikuModel = new MikuModel(), act: Act.Actions, state?: State) {
 
    
    var clone = require('clone-deep');
 
    switch (act.type) {

        case Act.UPDATE_MIKU:
            return Buzz.updateMiku(clone(model), act.bale, state);

        case Act.INIT_MIKU:
            return Buzz.initMiku(clone(model), act.bale, state);


        case Act.READ_MIKU:
            return Buzz.readMiku(clone(model), act.bale, state);

        case Act.WRITE_MIKU:
            return Buzz.writeMiku(clone(model), act.bale, state);

        case Act.REMOVE_MIKU:
            return Buzz.removeMiku(clone(model), act.bale, state);

        case Act.DELETE_MIKU:
            return Buzz.deleteMiku(clone(model), act.bale, state);

        case Act.CREATE_MIKU:
            return Buzz.createMiku(clone(model), act.bale, state);

        default:
            return model;
    }
}
