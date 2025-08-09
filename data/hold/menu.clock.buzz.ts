import * as ActMnu from "../menu.action";
import * as ActClk from "../../03.clock.unit/clock.action";
import * as ActCns from "../../83.console.unit/console.action";
import * as ActChc from "../../85.choice.unit/choice.action";

import * as Grid from "../../val/grid";
import * as Align from "../../val/align";
import * as Color from "../../val/console-color";


import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCvs from "../../82.canvas.unit/canvas.action";


import * as ActTrm from "../../act/terminal.action";
import * as ActVsg from "../../act/visage.action";
import * as ActGph from "../../act/graphic.action";
import * as ActHex from "../../act/hexagon.action";


var bit, lst, dex, idx, dat, src;


export const clockMenu = async (cpy: MenuModel, bal:MenuBit, ste: State) => {

  bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, { src: "-----------" })

  bit = await ste.hunt( ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "-----------" });
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "Clock Menu" });
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "-----------" });

  lst = [ ActClk.LIST_CLOCK, ActClk.WRITE_CLOCK];
  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });

  src = bit.chcBit.src;

  switch (src) {
    
    case ActClk.LIST_CLOCK:
      bit = await ste.hunt( ActClk.LIST_CLOCK, {});
    
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "list clock...." });  
      break;
    

    case ActClk.WRITE_CLOCK:
      bit = await ste.hunt( ActClk.WRITE_CLOCK, {});

      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "write clock...." });

      break;

    default:
      bit = await ste.hunt(ActTrm.CLOSE_TERMINAL, {});
      break;
  }

 
  bal.slv({ mnuBit: { idx: "clock-menu" } });
  return cpy;
  };


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

