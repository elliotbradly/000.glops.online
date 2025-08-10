import { GlopsModel } from "../glops.model";
import glopsBit from "../fce/glops.bit";
import State from "../../99.core/state";

import * as ActSpk from '../../act/spark.action'
import * as ActTme from '../../act/time.action'

import * as ActClk from '../../act/clock.action'
import * as ActClr from '../../act/color.action'

import * as ActInc from '../../act/increment.action'
import * as ActMap from "../../act/hexmap.action";
import * as ActFoc from "../../act/focus.action";

import * as PVT from '../../val/pivot'

import * as Increment from '../../val/increment'

var bit


export const openGlops = async (cpy: GlopsModel, bal: glopsBit, ste: State) => {


    if (cpy.opened == 1) {
        bal.slv({ ertBit: { idx: "open-glops", dat: { val: cpy.opened } } });
        return cpy
    }


    cpy.opened = 1

    cpy.idxClk = 'clk00'
    cpy.idxInc = 'inc00'

    var clk = { day: 0, hrs: 0, min: 0, mth: 0, sec: 0, yrs: 1822 }

    bit = await window[PVT.TIME](ActClk.WRITE_CLOCK, { idx: cpy.idxClk, clk })

    var incDft = { day: 0, hrs: 0, min: 0, mth: 0, sec: 6, yrs: 0 }

    var incHrs = { day: 0, hrs: 1, min: 0, mth: 0, sec: 0, yrs: 0 }
    var incMin = { day: 0, hrs: 0, min: 1, mth: 0, sec: 0, yrs: 0 }
    var incDay = { day: 0, hrs: 16, min: 0, mth: 0, sec: 0, yrs: 0 }
    var incSec = { day: 0, hrs: 0, min: 0, mth: 0, sec: 1, yrs: 0 }

    bit = await window[PVT.TIME](ActInc.WRITE_INCREMENT, { idx: Increment.DEFAULT, inc: incDft })

    bit = await window[PVT.TIME](ActInc.WRITE_INCREMENT, { idx: Increment.HOURS, inc: incHrs })
    bit = await window[PVT.TIME](ActInc.WRITE_INCREMENT, { idx: Increment.MINUTES, inc: incMin })
    bit = await window[PVT.TIME](ActInc.WRITE_INCREMENT, { idx: Increment.DAYS, inc: incDay })
    bit = await window[PVT.TIME](ActInc.WRITE_INCREMENT, { idx: Increment.SECONDS, inc: incSec })

    bit = await window[PVT.TIME](ActTme.RANDOM_TIME, { idx: 'clk00' })

    //ste.hunt(ActCtl.INCREMENT_CONTROL, { src: Increment.DEFAULT })

    bit = await window[PVT.SPACE](ActMap.WRITE_HEXMAP, { idx: 'map00' })
    var map = bit.mapBit.dat.bit

    bit = await window[PVT.SPACE](ActFoc.WRITE_FOCUS, { idx: 'foc00', src: 'map00' })
    var focus = bit.focBit.dat

    //var FS = require('fs-extra')

    //var lst = FS.readJsonSync('./public/data/color/000.color.name.json')
    //bit = await window[PVT.SOWER](ActClr.OPEN_COLOR, { lst })

    //bit = await window[PVT.SOWER](ActSpk.WRITE_SPARK, { idx: 'spk00' })

    bal.slv({ ertBit: { idx: "open-glops", dat: { val: cpy.opened } } });

    return cpy;
};
