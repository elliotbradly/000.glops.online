const path = require('path');

import { MenuModel } from "../../menu.model";
import MenuBit from "../../fce/menu.bit";
import State from "../../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";


import * as ActSpc from "../../../act/space.action";

import * as Grid from '../../../val/grid';
import * as Align from '../../../val/align'
import * as Color from '../../../val/console-color';

import * as SHAPE from '../../../val/shape'
import * as FOCUS from "../../../val/focus";

import * as ActMnu from "../../menu.action";

//import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActTrm from "../../../80.terminal.unit/terminal.action";
import * as ActChc from "../../../85.choice.unit/choice.action";
import * as ActPut from "../../../84.input.unit/input.action";

import * as ActGrd from "../../../81.grid.unit/grid.action";
import * as ActCns from "../../../83.console.unit/console.action";

import * as ActFte from "../../../act/fate.action";
import * as ActSow from "../../../act/sower.action";
import * as ActSpk from "../../../act/spark.action";
import * as ActAmb from "../../../act/ambit.action";
import * as ActAvo from "../../../act/avaou.action";
import * as ActAvd from "../../../act/avide.action";
import * as ActArt from "../../../act/artes.action";
import * as ActPri from "../../../act/primal.action";
import * as ActBnd from "../../../act/bounded.action";
import * as ActPas from "../../../act/pastoral.action";
import * as ActBls from "../../../act/blessed.action";
import * as ActSup from "../../../act/supernal.action";

import * as ActClr from "../../../act/color.action";

var bit, lst, dex, idx, dat, src;

var SOWER;

var opened = false;

export const beingMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  SOWER = global.SOWER

  lst = [
    ActSup.WRITE_SUPERNAL,
    ActBls.WRITE_BLESSED,
    ActPas.WRITE_PASTORAL,
    ActBnd.WRITE_BOUNDED,
    ActPri.WRITE_PRIMAL,
    ActArt.WRITE_ARTES,
    ActAvd.WRITE_AVIDE,
    ActAvo.WRITE_AVAOU,
    ActAmb.WRITE_AMBIT,
    ActSpk.WRITE_SPARK,
    ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    
    case ActSup.WRITE_SUPERNAL:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input pastoral idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt( ActSup.WRITE_SUPERNAL, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    
    case ActBls.WRITE_BLESSED:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input pastoral idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt( ActBls.WRITE_BLESSED, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActPas.WRITE_PASTORAL:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input pastoral idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt( ActPas.WRITE_PASTORAL, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActBnd.WRITE_BOUNDED:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input bounded idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt( ActBnd.WRITE_BOUNDED, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActPri.WRITE_PRIMAL:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input primal idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt( ActPri.WRITE_PRIMAL, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActArt.WRITE_ARTES:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input artes idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt(ActArt.WRITE_ARTES, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActAvd.WRITE_AVIDE:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input avide idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt(ActAvd.WRITE_AVIDE, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActAvo.WRITE_AVAOU:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input avaou idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt(ActAvo.WRITE_AVAOU, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActAmb.WRITE_AMBIT:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input ambit idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt(ActAmb.WRITE_AMBIT, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActSpk.WRITE_SPARK:

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 2 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input clock idx', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      bit = await SOWER.hunt(ActSpk.WRITE_SPARK, { idx })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActMnu.COLOR_MENU:
      bit = await ste.hunt(ActMnu.COLOR_MENU, {})
      //bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

      case ActMnu.FATE_MENU:
        bit = await ste.hunt(ActMnu.FATE_MENU, {})
        //bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
        break;

    case ActSow.INIT_SOWER:

      bit = await SOWER.hunt(ActSow.INIT_SOWER, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActSow.UPDATE_SOWER:
      bit = await SOWER.hunt(ActSow.UPDATE_SOWER, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActSow.TEST_SOWER:
      bit = await SOWER.hunt(ActSow.TEST_SOWER, {})
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

    bit = await ste.hunt(ActMnu.SOWER_MENU, {})

  }, 333)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });
