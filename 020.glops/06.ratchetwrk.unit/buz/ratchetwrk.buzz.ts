import * as ActSpk from "../../03.ratchetwrk.unit/ratchetwrk.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";


import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action"


var bit, val, idx, dex, lst, dat, src;

export const initRatchetwrk = async (cpy: RatchetwrkModel, bal: RatchetwrkBit, ste: State) => {

    //set up colors
    //src = '000.color.name.json'
    //bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/' + src })
    //var colorList = bit.dskBit.dat;

    //lst = JSON.parse(colorList)

    //bit = await ste.bus(ActClr.WRITE_COLOR, { idx: 'clr00', dat: { lst } });

    //var staveDataLoc = './data/stave/'
    //src = staveDataLoc + '002.genisi.txt';

    //bit = await ste.bus(ActStv.WRITE_STAVE, { src });

    bal.slv({ intBit: { idx: "init-ratchetwrk" } });

    return cpy;
};


export const updateRatchetwrk = async (cpy: RatchetwrkModel, bal: RatchetwrkBit, ste: State) => {
    return cpy;
};


export const readRatchetwrk = async (cpy: RatchetwrkModel, bal: RatchetwrkBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'spk00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSpk.CREATE_RATCHETWRK })

    bal.slv({ spkBit: { idx: "read-ratchetwrk", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeRatchetwrk = async (cpy: RatchetwrkModel, bal: RatchetwrkBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSpk.CREATE_RATCHETWRK })

    if (bal.slv != null) bal.slv({ spkBit: { idx: "write-ratchetwrk", dat: bit.clcBit.dat } });
    return cpy;
};



export const removeRatchetwrk = async (cpy: RatchetwrkModel, bal: RatchetwrkBit, ste: State) => {
    debugger
    return cpy;
};


export const deleteRatchetwrk = async (cpy: RatchetwrkModel, bal: RatchetwrkBit, ste: State) => {
    debugger
    return cpy;
};




import { RatchetwrkModel } from "../ratchetwrk.model";
import RatchetwrkBit from "../fce/ratchetwrk.bit";
import State from "../../99.core/state";
import OrbBit from "../fce/orb.bit";
