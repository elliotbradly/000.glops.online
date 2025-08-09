import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";

import * as Grid from "../../val/grid";
import * as Align from "../../val/align";
import * as Color from "../../val/console-color";

import * as ActMnu from "../menu.action";

import * as ActTme from "../../00.time.unit/time.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCvs from "../../82.canvas.unit/canvas.action";
import * as ActCns from "../../83.console.unit/console.action";

var bit, lst, dex, idx, dat, src;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  if (bal == null) bal = { idx: null };

  bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {});

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 });
  bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: "cvs1", dat: { clr: Color.CYAN, net: bit.grdBit.dat } });

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 10, ySpan: 12 });
  bit = await ste.hunt(ActCns.WRITE_CONSOLE, { idx: "cns00", src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });

  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "-----------" });
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "Time PIVOT V0" });
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "-----------" });

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  lst = [ ActMnu.CLOCK_MENU,  ActTme.UPDATE_TIME];
  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });

  src = bit.chcBit.src;

  switch (src) {
    
    case ActMnu.CLOCK_MENU:

      bit = await ste.hunt( ActMnu.CLOCK_MENU, {});
       
      break;
    

    case ActTme.UPDATE_TIME:
      bit = await ste.hunt(ActTme.UPDATE_TIME, {});

      lst = bit.tmeBit.lst;

      lst.forEach(async (a) => {
        //bit = await ste.hunt(ActMnu.PRINT_MENU, a);
      });

      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "updated Time...." });
      break;

    default:
      bit = await ste.hunt(ActTrm.CLOSE_TERMINAL, {});
      break;
  }

  setTimeout(() => {
    updateMenu(cpy, bal, ste);
  }, 11);

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  await ste.hunt(ActTrm.CLOSE_TERMINAL, {});

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger;
  return cpy;
};

export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  itm = itm.replace('["', "\n");
  itm = itm.replace("]}", "\n");

  lst = itm.split(",");
  lst.forEach((a) => ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });
