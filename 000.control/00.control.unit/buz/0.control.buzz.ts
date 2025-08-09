
import * as ActTme from "../../act/time.action";
import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";


var bit, val, idx, dex, lst, dat, src;

export const initControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {


  bal.slv({ intBit: { idx: "init-control" } });

  return cpy;
};






export const createControl = (cpy: ControlModel, bal: ControlBit, ste: State) => {

  // const { exec } = require('child_process');

  // exec('npx quasar build', async (err, stdout, stderr) => {

  //   if (bal.slv != null) bal.slv({ condBit: { idx: "create-control", dat: {} } });

  // })


  return cpy;
};

export const testControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  //bit = await ste.bus(ActCrd.READ_CARDANO, {})

  bit = await window['TIME'](ActTme.RANDOM_TIME, { idx: 'clk00' })

  if (bal.slv != null) bal.slv({ condBit: { idx: "test-control", val:1, dat: { tmeBit:bit } } });

  return cpy;
};





var patch = (ste, type, bale) => ste.dispatch({ type, bale });




