import { GlopsModel } from "../glops.model";
import glopsBit from "../fce/glops.bit";
import State from "../../99.core/state";

import * as ActSpk from '../../act/spark.action'
import * as ActTme from '../../act/time.action'

import * as ActClk from '../../act/clock.action'
import * as ActInc from '../../act/increment.action'
import * as ActMap from "../../act/hexmap.action";
import * as ActFoc from "../../act/focus.action";

import * as ActPrg from "../../act/progress.action";

import * as PVT from '../../val/pivot'

import * as Increment from '../../val/increment'

var bit

export const advanceglops = async (cpy: GlopsModel, bal: glopsBit, ste: State) => {

    cpy.dex += 1;


    bit = await window['TIME'](ActPrg.UPDATE_PROGRESS, { idx: cpy.idxInc, src: cpy.idxClk });




  bal.slv({ ertBit: { idx: "advance-glops" } });

    return cpy;
};
