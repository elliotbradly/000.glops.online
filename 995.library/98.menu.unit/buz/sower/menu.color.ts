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

import * as Color from '../../../val/console-color';

var bit, lst, dex, idx, dat, src;

var SOWER;

export const colorMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var FS = require('fs-extra')

  SOWER = global.SOWER;

  lst = [ActClr.BASKET_COLOR, ActClr.RANDOM_COLOR, ActClr.OPEN_COLOR, ActClr.LIST_COLOR, ActClr.UPDATE_COLOR, ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActClr.BASKET_COLOR:
      lst = FS.readJsonSync('./public/data/color/000.color.name.json')
      bit = await SOWER.hunt(ActClr.OPEN_COLOR, { lst })

      bit = await SOWER.hunt(ActClr.BASKET_COLOR, { dat: null })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)

      break;

    case ActClr.RANDOM_COLOR:
      lst = FS.readJsonSync('./public/data/color/000.color.name.json')
      bit = await SOWER.hunt(ActClr.OPEN_COLOR, { lst })

      bit = await SOWER.hunt(ActClr.RANDOM_COLOR, { dat: null })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)

      break;

    case ActClr.OPEN_COLOR:
      lst = FS.readJsonSync('./public/data/color/000.color.name.json')
      bit = await SOWER.hunt(ActClr.OPEN_COLOR, { lst })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActClr.UPDATE_COLOR:
      bit = await SOWER.hunt(ActClr.UPDATE_COLOR, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActClr.LIST_COLOR:
      bit = await SOWER.hunt(ActClr.LIST_COLOR, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMnu.UPDATE_MENU:
      bit = await ste.hunt(ActMnu.UPDATE_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
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

    bit = await ste.hunt(ActMnu.COLOR_MENU, {})

  }, 3)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });



