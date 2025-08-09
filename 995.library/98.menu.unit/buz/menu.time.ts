const path = require('path');

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";

import * as ActTme from "../../act/time.action";
import * as ActClk from "../../act/clock.action";
import * as ActPrg from "../../act/progress.action";
import * as ActInc from "../../act/increment.action";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

import * as ActMnu from "../menu.action";

//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";


import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";
import * as ActPut from "../../84.input.unit/input.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCns from "../../83.console.unit/console.action";

var bit, lst, dex, idx, dat, src;

var TIME;

var incIdx;
var clkIdx;

export const timeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var exec = require('child_process').exec;

  await (async () => {
    try {
      await new Promise<void>((resolve, reject) => exec('tsc -b 001.time', err => err ? reject(err) : resolve()));

      if (TIME == null) ste.hunt(ActMnu.PRINT_MENU, { src: "compiled time" });
      if (TIME == null) TIME = require(path.resolve('./dist/001.time/hunt'));

    } catch (err) {
      console.error(`exec error: ${err}`);
      throw err;
    }
  })();

  lst = [
    ActPrg.UPDATE_PROGRESS, ActClk.WRITE_CLOCK, ActClk.READ_CLOCK, ActClk.LIST_CLOCK,
    ActInc.WRITE_INCREMENT, ActInc.READ_INCREMENT, ActInc.LIST_INCREMENT,
    ActTme.RANDOM_TIME, ActTme.TEST_TIME, ActMnu.UPDATE_MENU
  ]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
  src = bit.chcBit.src;

  switch (src) {
    case ActTme.TEST_TIME:
      bit = await TIME.hunt(ActTme.TEST_TIME, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActTme.RANDOM_TIME:
      bit = await TIME.hunt(ActTme.RANDOM_TIME, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActPrg.UPDATE_PROGRESS:

      if (incIdx == null) {

        bit = await TIME.hunt(ActInc.LIST_INCREMENT, {})
        lst = bit.clkBit.lst

        if (lst.length == 0) {
          bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no increment present" })
          break
        }

        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---choose the progress increment" })

        bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
        bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
        idx = bit.chcBit.src;
        incIdx = idx;

        bit = await TIME.hunt(ActClk.LIST_CLOCK, {})
        lst = bit.clkBit.lst

        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---choose the progress source" })

        bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
        bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
        src = bit.chcBit.src;
        clkIdx = src

      }

      bit = await TIME.hunt(ActPrg.UPDATE_PROGRESS, { idx: incIdx, src: clkIdx })

      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActInc.WRITE_INCREMENT:

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input increment id', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input day', net: bit.grdBit.dat })
      var day = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input hour', net: bit.grdBit.dat })
      var hrs = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input minute', net: bit.grdBit.dat })
      var min = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input month', net: bit.grdBit.dat })
      var mth = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input second', net: bit.grdBit.dat })
      var sec = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input year', net: bit.grdBit.dat })
      var yrs = bit.putBit.src;

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await TIME.hunt(ActInc.WRITE_INCREMENT, { idx, inc: { day, hrs, min, mth, sec, yrs } })
      incIdx = bit.incBit.dat.idx
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)      
      break;


    case ActInc.READ_INCREMENT:

      bit = await TIME.hunt(ActInc.LIST_INCREMENT, {})
      lst = bit.clkBit.lst

      if (lst.length == 0) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no increment present" })
        break
      }

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await TIME.hunt(ActInc.READ_INCREMENT, { idx: src })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)

      break;

    case ActInc.LIST_INCREMENT:

      bit = await TIME.hunt(ActInc.LIST_INCREMENT, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)

      break;

    case ActClk.WRITE_CLOCK:

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input clock idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input day', net: bit.grdBit.dat })
      var day = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input hour', net: bit.grdBit.dat })
      var hrs = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input minute', net: bit.grdBit.dat })
      var min = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input month', net: bit.grdBit.dat })
      var mth = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input second', net: bit.grdBit.dat })
      var sec = bit.putBit.src;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input year', net: bit.grdBit.dat })
      var yrs = bit.putBit.src;

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await TIME.hunt(ActClk.WRITE_CLOCK, { idx, clk: { day, hrs, min, mth, sec, yrs } })
      clkIdx = bit.clkBit.dat.idx
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActClk.READ_CLOCK:
      bit = await TIME.hunt(ActClk.LIST_CLOCK, {})
      lst = bit.clkBit.lst

      if (lst.length == 0) {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---no clock present" })
        break
      }

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await TIME.hunt(ActClk.READ_CLOCK, { idx: src })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActClk.LIST_CLOCK:
      bit = await TIME.hunt(ActClk.LIST_CLOCK, {})
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


  setTimeout(async () => { bit = await ste.hunt(ActMnu.TIME_MENU, {}) }, 333)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });
