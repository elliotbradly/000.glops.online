import * as ActFgp from "../formGlop.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";


import * as ActVrt from "../../../act/vurt.action"
import * as ActDsk from "../../../act/disk.action"
import * as ActPvt from "../../../act/pivot.action"


var bit, val, idx, dex, lst, dat, src;

export const initFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-formGlop" } });

    return cpy;
};


export const updateFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {
    return cpy;
};


export const readFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'fgp00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActFgp.CREATE_FORMGLOP })

    bal.slv({ fgpBit: { idx: "read-formGlop", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFgp.CREATE_FORMGLOP })

    if (bal.slv != null) bal.slv({ fgpBit: { idx: "write-formGlop", dat: bit.clcBit.dat } });
    return cpy;
};



export const removeFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {
    debugger
    return cpy;
};


export const deleteFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {
    debugger
    return cpy;
};




import { FormGlopModel } from "../formGlop.model";
import FormGlopBit from "../fce/formGlop.bit";
import State from "../../../995.library/99.core/state";
