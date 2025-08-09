const path = require('path');

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";


import * as ActSpc from "../../act/space.action";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

import * as ActMnu from "../menu.action";

//import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";
import * as ActPut from "../../84.input.unit/input.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCns from "../../83.console.unit/console.action";

import * as ActFte from "../../act/fate.action";
import * as ActSow from "../../act/sower.action";
import * as ActSpk from "../../act/spark.action";
import * as ActAmb from "../../act/ambit.action";
import * as ActAvo from "../../act/avaou.action";
import * as ActAvd from "../../act/avide.action";
import * as ActArt from "../../act/artes.action";
import * as ActPri from "../../act/primal.action";
import * as ActBnd from "../../act/bounded.action";
import * as ActPas from "../../act/pastoral.action";
import * as ActBls from "../../act/blessed.action";
import * as ActSup from "../../act/supernal.action";

import * as ActClr from "../../act/color.action";

var bit, lst, dex, idx, dat, src;

var SOWER;

var opened = false;

export const sowerMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {


  var FS = require('fs-extra')

  var exec = require('child_process').exec;


  await (async () => {
    try {
      await new Promise<void>((resolve, reject) => exec('tsc -b 010.sower', err => err ? reject(err) : resolve()));
      if (SOWER == null) global.SOWER = SOWER = require(path.resolve('./dist/010.sower/hunt'));
      bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled sower" });
    } catch (err) {
      console.error(`exec error: ${err}`);
      throw err;
    }
  })();

  if (opened == false) {
    opened = true;

    lst = FS.readJsonSync('./public/data/color/000.color.name.json')
    bit = await SOWER.hunt(ActClr.OPEN_COLOR, { lst })

  }

  lst = [
    ActMnu.BEING_MENU,
    ActMnu.COLOR_MENU,
    ActMnu.FATE_MENU,
    ActSow.INIT_SOWER,
    ActSow.UPDATE_SOWER,
    ActSow.TEST_SOWER,
    ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActMnu.BEING_MENU:
      bit = await ste.hunt(ActMnu.BEING_MENU, {})
      //bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
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
