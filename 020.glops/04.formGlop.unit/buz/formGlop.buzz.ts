import * as ActFgp from "../formGlop.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import { FormGlopModel } from "../formGlop.model";
import FormGlopBit from "../fce/formGlop.bit";

import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const initFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-formGlop" } });

    return cpy;
};


export const updateFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    const baseModuleYield = bal.baseModuleYield || 0;
    const miningLvl = bal.miningLvl || 0;
    const astrogeologyLvl = bal.astrogeologyLvl || 0;
    const shipBonus = bal.shipBonus || 0;
    const crystalBonus = bal.crystalBonus || 0;
    const fleetBoostBonus = bal.fleetBoostBonus || 0;
    const implantBonus = bal.implantBonus || 0;
    const cycleTime = bal.cycleTime || 1;

    const skillBonus = (1 + miningLvl * 0.05) * (1 + astrogeologyLvl * 0.05);

    const finalYieldPerCycle =
        baseModuleYield *
        skillBonus *
        (1 + shipBonus) *
        (1 + crystalBonus) *
        (1 + fleetBoostBonus) *
        (1 + implantBonus);

    const yieldPerSecond = finalYieldPerCycle / cycleTime;

    bal.dat = {
        yield: yieldPerSecond,
        yieldPerCycle: finalYieldPerCycle,
        cycleTime: cycleTime
    };

    if (bal.slv != null) bal.slv({ fgpBit: { idx: "update-formGlop", dat: bal.dat } });

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




