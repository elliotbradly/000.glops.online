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

export const initHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  return cpy;
};

export const writeHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  if (bal.idx == null) bal.idx = 'hex000'
  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHex.CREATE_HEXAGON });
  ste.hunt(ActHex.UPDATE_HEXAGON, { idx: bal.idx, dat: bal.dat.dat });
  if (bal.slv != null) bal.slv({ hexBit: { idx: "write-hexagon", dat: bit.clcBit.dat } });

  return cpy;
};



export const focusHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {


  return cpy;
};


export const hexmapHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {



  bal.slv({ hexBit: { idx: "hexmap-hexagon" } });


  return cpy;
};


export const readHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "hex00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActHex.CREATE_HEXAGON });
  if (slv != null) slv({ hexBit: { idx: "read-hexagon", dat: bit.clcBit.dat } });

  return cpy;
};



export const removeHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHex.DELETE_HEXAGON })
  if (bal.slv != null) bal.slv({ hexBit: { idx: "replace-hexagon", dat: bit.clcBit } });

  return cpy;
};




export const deleteHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {
  debugger
  return cpy;
};

