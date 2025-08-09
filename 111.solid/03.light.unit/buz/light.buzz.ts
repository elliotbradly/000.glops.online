import { LightModel } from "../light.model";
import LightBit from "../fce/light.bit";
import State from "../../99.core/state";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActLgt from "../light.action";

import LgtBit from "../fce/light.bit"
import { BabylonModel } from "../../01.babylon.unit/babylon.model";
import LitBit from "../fce/lit.bit";

var bit, dat;

export const initLight = (cpy: LightModel, bal: LightBit, ste: State) => {
    debugger
    return cpy;
};

export const updateLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    bit = await ste.hunt(ActLgt.READ_LIGHT, { idx: bal.idx })
    dat = bit.lgtBit.dat

    //dat.bit.position = new BABYLON.Vector3( dat.position.x, dat.position.y,  dat.position.z);

    bal.slv({ lgtBit: { idx: "update-light" } });
};


export const readLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'lgt00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActLgt.CREATE_LIGHT })
    //if (slv != null) slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });
    //return cpy;

    bal.slv({ mkuBit: { idx: "read-light", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-write-light", dat: {} } });

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActLgt.CREATE_LIGHT })

    if (bit.clcBit.val != 0) ste.hunt(ActLgt.UPDATE_LIGHT, { idx: bal.idx })

    //if (bal.slv != null) bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });

    bal.slv({ mkuBit: { idx: "write-light", dat: bit.clcBit.dat } });
    return cpy;
};

export const removeLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActLgt.DELETE_LIGHT })
    if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-light", dat: bit.clcBit } });

    bal.slv({ mkuBit: { idx: "remove-light" } });

};

export const deleteLight = (cpy: LightModel, bal: LightBit, ste: State) => {
    debugger
    return cpy;
};

export const createLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    if (ste.value.babylon == null) {
        return alert("babylon error")
    }

    var modBab: BabylonModel = ste.value.babylon

    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-create-light", dat: {} } });

    //you have a source visage
    //now you wish to update a bit of the source visage
    var dat: LitBit = { idx: bal.idx }

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }


    bal.slv({ mkuBit: { idx: "create-light", dat } });
    return cpy;
};