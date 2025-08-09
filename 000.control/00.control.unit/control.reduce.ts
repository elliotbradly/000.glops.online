import * as clone from "clone-deep";
import * as Act from "./control.action";
import { ControlModel } from "./control.model";
import * as Buzz from "./control.buzzer";
import State from "../99.core/state";

export function reducer(model: ControlModel = new ControlModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_CONTROL:
            return Buzz.updateControl(clone(model), act.bale, state);

        case Act.INIT_CONTROL:
            return Buzz.initControl(clone(model), act.bale, state);

        case Act.OPEN_CONTROL:
            return Buzz.openControl(clone(model), act.bale, state);

        case Act.CREATE_CONTROL:
            return Buzz.createControl(clone(model), act.bale, state);

        case Act.TEST_CONTROL:
            return Buzz.testControl(clone(model), act.bale, state);

        case Act.ACCESS_CONTROL:
            return Buzz.accessControl(clone(model), act.bale, state);

        case Act.OUTPUT_CONTROL:
            return Buzz.outputControl(clone(model), act.bale, state);

        case Act.ADVANCE_CONTROL:
            return Buzz.advanceControl(clone(model), act.bale, state);

        case Act.INCREMENT_CONTROL:
            return Buzz.incrementControl(clone(model), act.bale, state);


        case Act.DATA_CONTROL:
            return Buzz.dataControl(clone(model), act.bale, state);

        default:
            return model;
    }
}
