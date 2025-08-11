import { RatchetwrkModel } from "../ratchetwrk.model";
import RatchetwrkBit from "../fce/ratchetwrk.bit";
import State from "../../99.core/state";
import OrbBit from "../fce/orb.bit";

//import * as ActClr from "../../../000.earth/03.color.unit/color.action";
import * as ActSpk from "../../03.ratchetwrk.unit/ratchetwrk.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action"

import EtherealBit from "../fce/talent/etheric.bit";

var bit, val, idx, dex, lst, dat, src;

export const createRatchetwrk = async (cpy: RatchetwrkModel, bal: RatchetwrkBit, ste: State) => {

    var dat: OrbBit = { idx: bal.idx, src: bal.src }

    var etri:EtherealBit = { bliyte:null, grusit:null, flxuow:null, kldadu:null };
    dat.bit = etri;

  //  bit = await ste.hunt( ActClr.BASKET_COLOR, {})
  //  dat.bit.bliyte = bit.clrBit.dat

  //  bit = await ste.hunt( ActClr.BASKET_COLOR, {})
  //  dat.bit.flxuow = bit.clrBit.dat

  //  bit = await ste.hunt( ActClr.BASKET_COLOR, {})
  //  dat.bit.grusit = bit.clrBit.dat

  //  bit = await ste.hunt( ActClr.BASKET_COLOR, {})
  //  dat.bit.kldadu = bit.clrBit.dat

    dat

    bal.slv({ spkBit: { idx: "create-ratchetwrk", dat } });

    return cpy;
};
