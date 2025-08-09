import * as ActClk from "../../act/clock.action";
import * as ActTme from "../../act/time.action";

import * as ActInc from "../../act/increment.action";
import * as ActBby from "../../act/babylon.action";
import * as ActMku from "../../act/miku.action";
import * as ActScr from "../../act/screen.action";

import * as ActPrg from "../../act/progress.action";

import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;


export const advanceControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  cpy.dex += 1;
  //const bit = await window['TIME'](ActPrg.UPDATE_PROGRESS, { idx: cpy.idxInc, src: cpy.idxClk });
  
  bal.slv({ ctlBit: { idx: "advance-control" } });
  return cpy;
};

