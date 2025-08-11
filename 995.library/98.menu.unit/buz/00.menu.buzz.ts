import * as ActMnu from "../menu.action";

import * as ActLib from "../../00.library.unit/library.action";
import * as ActUnt from "../../01.unit.unit/unit.action";
import * as ActAct from "../../02.action.unit/action.action";

import * as ActDat from "../../03.data.unit/data.action";

import * as ActSrv from "../../04.server.unit/server.action";

import * as ActClc from "../../97.collect.unit/collect.action";

import * as ActPut from "../../84.input.unit/input.action";
import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
//import * as ActCvs from "../../82.canvas.unit/canvas.action";
import * as ActCns from "../../83.console.unit/console.action";

import * as ActDif from "../../act/diffusion.action"

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

var bit, lst, dex, idx, dat, src, val;

var FS = require('fs-extra')

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.hunt(ActTrm.INIT_TERMINAL, {});

  bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 1, ySpan: 12 })
  //bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 8, ySpan: 12 })
  bit = await ste.hunt(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "GLOPS.ONLINE  V0.0.0" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [
    ActLib.DEV_LIBRARY,
    ActMnu.GLOPS_MENU,
    ActDif.UPDATE_DIFFUSION,
    ActSrv.UPDATE_SERVER,
    ActMnu.EARTH_MENU,
    ActDat.FRAME_DATA,
    ActMnu.OLLAMA_MENU,
    ActMnu.CONTROL_MENU,
    ActMnu.TIME_MENU,
    ActMnu.SPACE_MENU,
    ActMnu.SOWER_MENU,
    ActLib.ASTRO_LIBRARY,
    ActLib.COUNT_LIBRARY, ActUnt.UPDATE_UNIT, ActAct.UPDATE_ACTION, ActUnt.CREATE_UNIT, ActLib.UPDATE_LIBRARY, ActLib.LIST_LIBRARY]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActMnu.GLOPS_MENU:
      
      bit = await ste.hunt(ActMnu.GLOPS_MENU, {})
      break;


    case ActSrv.UPDATE_SERVER:
      var bit = await ste.hunt(ActSrv.UPDATE_SERVER, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActDif.UPDATE_DIFFUSION:
      var bit = await ste.bus(ActDif.UPDATE_DIFFUSION, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActDat.FRAME_DATA:

      lst = FS.readdirSync('../films')

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Framing.." + src })

      var bit = await ste.hunt(ActDat.FRAME_DATA, { src })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActAct.UPDATE_ACTION:

      bit = await ste.hunt(ActLib.LIST_LIBRARY, {})
      lst = bit.libBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await ste.hunt(ActUnt.LIST_UNIT, { src })
      lst = bit.untBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      idx = bit.chcBit.src;

      var updateBit = await ste.hunt(ActAct.UPDATE_ACTION, { idx, src })
      break;

    case ActUnt.CREATE_UNIT:

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input verb', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      var updateBit = await ste.hunt(ActUnt.CREATE_UNIT, { idx })

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActMnu.PRINT_MENU, updateBit)
      break;

    case ActUnt.UPDATE_UNIT:

      bit = await ste.hunt(ActLib.LIST_LIBRARY, {})
      lst = bit.libBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await ste.hunt(ActUnt.LIST_UNIT, { src })
      lst = bit.untBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      idx = bit.chcBit.src;

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input verb', net: bit.grdBit.dat })
      dat = bit.putBit.src;

      var updateBit = await ste.hunt(ActUnt.UPDATE_UNIT, { idx, src, dat })
      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, updateBit)
      break;

    case ActUnt.CREATE_UNIT:

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input verb', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      var updateBit = await ste.hunt(ActUnt.CREATE_UNIT, { idx })

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActMnu.PRINT_MENU, updateBit)
      break;

    case ActLib.ASTRO_LIBRARY:
      var bit = await ste.hunt(ActLib.ASTRO_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActLib.LIST_LIBRARY:
      var bit = await ste.hunt(ActLib.LIST_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActLib.DEV_LIBRARY:
      var bit = await ste.hunt(ActLib.DEV_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActLib.COUNT_LIBRARY:
      var bit = await ste.hunt(ActLib.COUNT_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActLib.UPDATE_LIBRARY:
      var bit = await ste.hunt(ActLib.LIST_LIBRARY, {})
      lst = bit.libBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      src = bit.chcBit.src;

      var bit = await ste.hunt(ActLib.UPDATE_LIBRARY, { src })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMnu.CONTROL_MENU:
      bit = await ste.hunt(ActMnu.CONTROL_MENU, {})
      break;

    case ActMnu.OLLAMA_MENU:
      bit = await ste.hunt(ActMnu.OLLAMA_MENU, {})
      break;

    case ActMnu.SOWER_MENU:
      bit = await ste.hunt(ActMnu.SOWER_MENU, {})
      break;

    case ActMnu.SPACE_MENU:
      bit = await ste.hunt(ActMnu.SPACE_MENU, {})
      break;

    case ActMnu.TIME_MENU:
      bit = await ste.hunt(ActMnu.TIME_MENU, {})
      break;

    case ActMnu.EARTH_MENU:
      bit = await ste.hunt(ActMnu.EARTH_MENU, {})
      break;



    case ActLib.UPDATE_LIBRARY:
      ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Update Library Pivot" })
      bit = await ste.hunt(ActLib.UPDATE_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMnu.GITHUB_MENU:
      bit = await ste.hunt(ActMnu.GITHUB_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      bit = await ste.hunt(ActMnu.UPDATE_MENU)
      break;

    default:
      bit = await ste.hunt(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  setTimeout(() => {

    updateMenu(cpy, bal, ste);

  }, 1111)



  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.hunt(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};


export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  lst = itm.split(",");
  lst.forEach((a) => ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });
