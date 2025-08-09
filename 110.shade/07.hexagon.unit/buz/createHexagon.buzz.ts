import { HexagonModel } from "../hexagon.model";
import HexagonBit from "../fce/hexagon.bit";
import HexBit from "../fce/hex.bit";
import State from "../../99.core/state";
import * as Honeycomb from "honeycomb-grid";
import * as PIXI from "pixi.js";

import * as HEXAGON from "../../val/hexagon"
import * as DIRECTION from "../../val/direction"

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";
import * as ActHex from "../../07.hexagon.unit/hexagon.action";
import * as ActVsg from "../../21.visage.unit/visage.action";

var bit, val, idx, dex, lst, dat;

export const createHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  var dat: HexBit = { idx: bal.idx, src: bal.src };

  for (var key in bal.dat) {
    if (key == 'dat') continue
    dat[key] = bal.dat[key]
  }

  if (bal.dat == null) bal.dat = {}

  var hexagon = bal.dat.dat;

  var map = hexagon.bit
  var graphic = hexagon.gph

  dat.gph = graphic
  dat.map = map

  if (hexagon == null) {
    return bal.slv({ usrBit: { idx: "create-hexagon", src: 'no-hexagon-present' } });
  }

  if (hexagon != null) {
    dat.frm = hexagon.typ;
    dat.gph = hexagon.gph;
  }

  if (dat.clr == null) dat.clr = 0x0000000;
  if (dat.lne == null) dat.lne = 2;
  if (dat.wpe == null) dat.wpe = true;
  if (dat.a == null) dat.a = 1;
  if (dat.pct == null) dat.pct = 1;
  if (dat.sze == null) dat.sze = 3;

  if (dat.frm == null) dat.frm = HEXAGON.HEXMAP;

  //if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })

  bal.slv({ usrBit: { idx: "create-hexagon", dat: dat } });
  return cpy;

};