import * as ActFgp from "../fluxGlop.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import { FluxGlopModel } from "../fluxGlop.model";
import FluxGlopBit from "../fce/fluxGlop.bit";

import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const initFluxGlop = async (cpy: FluxGlopModel, bal: FluxGlopBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-fluxGlop" } });

    return cpy;
};


export const updateFluxGlop = async (cpy: FluxGlopModel, bal: FluxGlopBit, ste: State) => {

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

    if (bal.slv != null) bal.slv({ flpBit: { idx: "update-fluxGlop", dat: bal.dat } });

    return cpy;
};


export const readFluxGlop = async (cpy: FluxGlopModel, bal: FluxGlopBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'flp00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActFgp.CREATE_FLUXGLOP })

    bal.slv({ flpBit: { idx: "read-fluxGlop", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeFluxGlop = async (cpy: FluxGlopModel, bal: FluxGlopBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFgp.CREATE_FLUXGLOP })

    if (bal.slv != null) bal.slv({ flpBit: { idx: "write-fluxGlop", dat: bit.clcBit.dat } });
    return cpy;
};



export const removeFluxGlop = async (cpy: FluxGlopModel, bal: FluxGlopBit, ste: State) => {
    debugger
    return cpy;
};


export const deleteFluxGlop = async (cpy: FluxGlopModel, bal: FluxGlopBit, ste: State) => {
    debugger
    return cpy;
};
