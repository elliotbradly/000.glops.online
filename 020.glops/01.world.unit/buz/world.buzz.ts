import { WorldModel } from "../world.model";
import WorldBit from "../fce/world.bit";
import State from "../../99.core/state";
import OrbBit from "../fce/orb.bit";


import * as ActWld from "../../01.world.unit/world.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";




var bit, val, idx, dex, lst, dat, src;

export const initWorld = async (cpy: WorldModel, bal: WorldBit, ste: State) => {

    //set up colors
    //src = '000.color.name.json'
    //bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/' + src })
    //var colorList = bit.dskBit.dat;

    //lst = JSON.parse(colorList)

    //bit = await ste.bus(ActClr.WRITE_COLOR, { idx: 'clr00', dat: { lst } });

    //var staveDataLoc = './data/stave/'
    //src = staveDataLoc + '002.genisi.txt';

    //bit = await ste.bus(ActStv.WRITE_STAVE, { src });

    bal.slv({ intBit: { idx: "init-world" } });

    return cpy;
};


export const updateWorld = async (cpy: WorldModel, bal: WorldBit, ste: State) => {
    return cpy;
};


export const readWorld = async (cpy: WorldModel, bal: WorldBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'wld00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActWld.CREATE_WORLD })

    bal.slv({ wldBit: { idx: "read-world", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeWorld = async (cpy: WorldModel, bal: WorldBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActWld.CREATE_WORLD })

    if (bal.slv != null) bal.slv({ wldBit: { idx: "write-world", dat: bit.clcBit.dat } });
    return cpy;
};



export const removeWorld = async (cpy: WorldModel, bal: WorldBit, ste: State) => {
    debugger
    return cpy;
};


export const deleteWorld = async (cpy: WorldModel, bal: WorldBit, ste: State) => {
    debugger
    return cpy;
};
