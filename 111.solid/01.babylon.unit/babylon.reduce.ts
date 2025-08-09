import * as Act from "./babylon.action";
import { BabylonModel } from "./babylon.model";
import * as Buzz from "./babylon.buzzer";
import State from "../99.core/state";

export function reducer(model: BabylonModel = new BabylonModel(), act: Act.Actions, state?: State) {
        
    var clone = require('clone-deep');

    switch (act.type) {

        case Act.UPDATE_BABYLON:
            return Buzz.updateBabylon(clone(model), act.bale, state);

        case Act.INIT_BABYLON:
            return Buzz.initBabylon(clone(model), act.bale, state);

        case Act.OPEN_BABYLON:
            return Buzz.openBabylon(clone(model), act.bale, state);


        case Act.RECORD_BABYLON:
            return Buzz.recordBabylon(clone(model), act.bale, state);


        case Act.ACTION_BABYLON:
            return Buzz.actionBabylon(clone(model), act.bale, state);



        case Act.CUT_BABYLON:
            return Buzz.cutBabylon(structuredClone(model), act.bale, state);

        default:
            return model;
    }
}
