import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";
const path = require('path');
var exec = require('child_process').exec;

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

import * as ActMnu from "../menu.action";

//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActOlm from "../../10.ollama.unit/ollama.action";
import * as ActCdx from "../../20.codex.unit/codex.action";


import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";
import * as ActPut from "../../84.input.unit/input.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCns from "../../83.console.unit/console.action";

import * as ActTrn from "../../act/turn.action";
import * as ActCtl from "../../act/control.action";
import * as ActClr from "../../act/color.action";

import * as PVT from '../../val/pivot'

var bit, lst, dex, idx, dat, src;

var CONTROL, TIME, SPACE, PIXEL, SOLID, SOWER, EARTH;

var opened = false;

export const ollamaMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ ActCdx.UPDATE_CODEX,  ActOlm.WRITE_OLLAMA, ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActCdx.UPDATE_CODEX:
      bit = await ste.hunt( ActCdx.UPDATE_CODEX, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActOlm.WRITE_OLLAMA:
      bit = await ste.hunt(ActOlm.WRITE_OLLAMA, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActMnu.UPDATE_MENU:
      bit = await ste.hunt(ActMnu.UPDATE_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    default:
      bit = await ste.hunt(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  setTimeout(async () => {

    bit = await ste.hunt(ActMnu.OLLAMA_MENU, {})

  }, 333)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });
