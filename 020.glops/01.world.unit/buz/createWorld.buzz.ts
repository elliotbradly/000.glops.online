import { WorldModel } from "../world.model";
import WorldBit from "../fce/world.bit";
import State from "../../99.core/state";
import OrbBit from "../fce/orb.bit";


import * as ActClr from "../../03.color.unit/color.action";

import * as ActWld from "../../01.world.unit/world.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";


import EtherealBit from "../fce/talent/etheric.bit";

var bit, val, idx, dex, lst, dat, src;

export const createWorld = async (cpy: WorldModel, bal: WorldBit, ste: State) => {

    var dat: OrbBit = { idx: bal.idx, src: bal.src }

    //var etri:EtherealBit = { bliyte:null, grusit:null, flxuow:null, kldadu:null };
    //dat.bit = etri;

    //bit = await ste.hunt( ActClr.BASKET_COLOR, {})
    //dat.bit.bliyte = bit.clrBit.dat

    //bit = await ste.hunt( ActClr.BASKET_COLOR, {})
    //dat.bit.flxuow = bit.clrBit.dat

    //bit = await ste.hunt( ActClr.BASKET_COLOR, {})
    //dat.bit.grusit = bit.clrBit.dat

    //bit = await ste.hunt( ActClr.BASKET_COLOR, {})
    //dat.bit.kldadu = bit.clrBit.dat

    //dat

    bal.slv({ wldBit: { idx: "create-world", dat } });

    return cpy;
};
