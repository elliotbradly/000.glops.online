import * as ActMnu from "../../menu.action";

import * as ActPxl from "../../../act/pixel.action";

import { MenuModel } from "../../menu.model";
import MenuBit from "../../fce/menu.bit";
import State from "../../../99.core/state";

import * as Grid from '../../../val/grid';
import * as Align from '../../../val/align'

import * as ActTrm from "../../../act/terminal.action";
import * as ActChc from "../../../act/choice.action";

import * as ActGrd from "../../../act/grid.action";

import * as ActClr from '../../../act/color.action'

import * as ActFte from "../../../act/fate.action";

import * as Color from '../../../val/console-color';

var bit, lst, dex, idx, dat, src;

var SOWER;

export const fateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var FS = require('fs-extra')

  SOWER = global.SOWER;

  lst = [
    ActFte.SINE_FATE,
    ActFte.INTEGER_FATE,
    ActFte.SELECT_FATE,
    ActFte.APPLE_FATE,
    ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActFte.SELECT_FATE:
      bit = await SOWER.hunt(ActFte.SELECT_FATE, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActFte.INTEGER_FATE:
      bit = await SOWER.hunt(ActFte.INTEGER_FATE, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActFte.APPLE_FATE:
      bit = await SOWER.hunt(ActFte.APPLE_FATE, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActFte.SINE_FATE:

      //setInterval(async () => {

      bit = await SOWER.hunt(ActFte.SINE_FATE, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)

      //}, 33)

      break;


    case ActMnu.UPDATE_MENU:
      bit = await ste.hunt(ActMnu.UPDATE_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  setTimeout(async () => {

    bit = await ste.hunt(ActMnu.FATE_MENU, {})

  }, 3)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });



