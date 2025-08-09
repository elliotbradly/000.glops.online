import * as ActClk from "../../act/clock.action";
import * as ActTxt from "../../act/text.action";

import * as ActHex from "../../act/hexagon.action";
import * as ActFgn from "../../act/focigon.action";
import * as ActMap from "../../act/hexmap.action";
import * as ActFoc from "../../act/focus.action";
import * as ActClr from "../../act/color.action";

import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;
export const outputControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  var output = { dex: 0, now: null, colorListSize: 0 };
  output.dex = cpy.dex

  bit = await window['TIME'](ActClk.READ_CLOCK, { idx: 'clk00' })

  output.now = bit.clkBit.dat

  bit = await window['SPACE'](ActMap.READ_HEXMAP, { idx: 'map00' })
  var map = bit.mapBit.dat.bit

  bit = await window['SPACE'](ActFoc.READ_FOCUS, { idx: 'foc00', src: 'map00' })
  var focus = bit.focBit.dat

  if (typeof document === 'undefined') return bal.slv({ ctlBit: { idx: "output-control", src: 'no document', dat: output } });
  if (document === undefined) return bal.slv({ ctlBit: { idx: "output-control", src: 'no document', dat: output } });

  bit = await window['SOWER'](ActClr.ACCESS_COLOR, {})

  var colorListSize = bit.clrBit.dat.val



  output.colorListSize = colorListSize

  //bit = await window['SHADE'](ActTxt.WRITE_TEXT, { idx: 'txt00', dat: { txt: 'You are waking from a dream about colorful flowers and it fills you with great excitement when you consider all the possible outcomes which could come afterward.' } })
  bit = await window['SHADE'](ActHex.WRITE_HEXAGON, { idx: 'hex00', dat: { dat: { gph: 'gph00', bit: map } } })
  bit = await window['SHADE'](ActFgn.WRITE_FOCIGON, { idx: 'fgn00', src: 'app00', dat: { gph: 'gph01', bit: focus } })

  bal.slv({ ctlBit: { idx: "output-control", dat: output } });

  return cpy;
};

