import { GlopsModel } from "../glops.model";
import glopsBit from "../fce/glops.bit";
import State from "../../99.core/state";

import * as ActSpk from '../../act/spark.action'
import * as ActTme from '../../act/time.action'

import * as ActClk from '../../act/clock.action'
import * as ActInc from '../../act/increment.action'
import * as ActMap from "../../act/hexmap.action";
import * as ActFoc from "../../act/focus.action";

import * as PVT from '../../val/pivot'

import * as Increment from '../../val/increment'

var bit


export const outputGlops = async (cpy: GlopsModel, bal: glopsBit, ste: State) => {


    var output = { dex: 0, now: null, map:null, focus:null, colorListSize: 0 };
    output.dex = cpy.dex

    bit = await window['TIME'](ActClk.READ_CLOCK, { idx: cpy.idxClk })

    output.now = bit.clkBit.dat

    bit = await window['SPACE'](ActMap.READ_HEXMAP, { idx: 'map00' })
    output.map = bit.mapBit.dat.bit


    bit = await window['SPACE'](ActFoc.READ_FOCUS, { idx: 'foc00', src: 'map00' })
    output.focus = bit.focBit.dat

    bal.slv({ ertBit: { idx: "output-glops", dat: output, val: cpy.opened } });

    return cpy;
};
