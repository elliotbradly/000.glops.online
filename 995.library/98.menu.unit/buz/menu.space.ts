const path = require('path');

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";


import * as ActSpc from "../../act/space.action";
import * as ActMap from "../../act/hexmap.action";
import * as ActFoc from "../../act/focus.action";



import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

import * as ActMnu from "../menu.action";

//import * as ActFoc from "../../02.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";
import * as ActPut from "../../84.input.unit/input.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCns from "../../83.console.unit/console.action";

var bit, lst, dex, idx, dat, src;

var SPACE;

var focIDX;

export const spaceMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var exec = require('child_process').exec;

  await (async () => {
    try {
      await new Promise<void>((resolve, reject) => exec('tsc -b 002.space', err => err ? reject(err) : resolve()));

      if (SPACE == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled space" });
      if (SPACE == null) SPACE = require(path.resolve('./dist/002.space/hunt'));

    } catch (err) {
      console.error(`exec error: ${err}`);
      throw err;
    }
  })();

  lst = [ActFoc.FORWARD_FOCUS, ActFoc.SPIN_RIGHT_FOCUS, ActFoc.SPIN_LEFT_FOCUS, ActFoc.BACKWARD_FOCUS, ActFoc.WRITE_FOCUS, ActMap.WRITE_HEXMAP, ActFoc.READ_FOCUS, ActMap.READ_HEXMAP, ActSpc.TEST_SPACE, ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActFoc.FORWARD_FOCUS:

      if (focIDX == null) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no focus present" })
        break
      }

      bit = await SPACE.hunt(ActFoc.FORWARD_FOCUS, { idx: focIDX })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActFoc.BACKWARD_FOCUS:

      if (focIDX == null) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no focus present" })
        break
      }

      bit = await SPACE.hunt(ActFoc.BACKWARD_FOCUS, { idx: focIDX })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActFoc.SPIN_RIGHT_FOCUS:

      if (focIDX == null) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no focus present" })
        break
      }

      bit = await SPACE.hunt(ActFoc.SPIN_RIGHT_FOCUS, { idx: focIDX })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActFoc.SPIN_LEFT_FOCUS:

      if (focIDX == null) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no focus present" })
        break
      }

      bit = await SPACE.hunt(ActFoc.SPIN_LEFT_FOCUS, { idx: focIDX })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActFoc.WRITE_FOCUS:
      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input focus id', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SPACE.hunt(ActMap.LIST_HEXMAP, {})
      lst = bit.mapBit.lst

      if (lst.length == 0) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no hexmap present" })
        break
      }

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await SPACE.hunt(ActFoc.WRITE_FOCUS, { idx, src })

      focIDX = bit.focBit.dat.idx
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActFoc.READ_FOCUS:

      bit = await SPACE.hunt(ActFoc.LIST_FOCUS, {})
      lst = bit.focBit.lst

      if (lst.length == 0) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no focus present" })
        break
      }

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      idx = bit.chcBit.src;

      bit = await SPACE.hunt(ActFoc.WRITE_FOCUS, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMap.WRITE_HEXMAP:
      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input hexmap id', net: bit.grdBit.dat })
      idx = bit.putBit.src;
      bit = await SPACE.hunt(ActMap.WRITE_HEXMAP, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMap.READ_HEXMAP:
      bit = await SPACE.hunt(ActMap.LIST_HEXMAP, {})
      lst = bit.mapBit.lst

      if (lst.length == 0) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no hexmap present" })
        break
      }

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await SPACE.hunt(ActMap.READ_HEXMAP, { idx: src })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActSpc.TEST_SPACE:
      bit = await SPACE.hunt(ActSpc.TEST_SPACE, {})
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

    bit = await ste.hunt(ActMnu.SPACE_MENU, {})

  }, 333)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });
