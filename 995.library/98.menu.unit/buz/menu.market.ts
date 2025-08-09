import * as ActMnu from "../menu.action";
const path = require('path');
var exec = require('child_process').exec;

import * as ActMrk from "../../act/market.action";

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

import * as ActCrd from "../../act/cardano.action";

import * as ActGrd from "../../act/grid.action";

var bit, lst, dex, idx, dat, src;

var MARKET;

export const marketMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await (async () => {
    try {
      await new Promise<void>((resolve, reject) => exec('tsc -b 168.market', err => err ? reject(err) : resolve()));
      if (MARKET == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled market" });
      if (MARKET == null) MARKET = require(path.resolve('./dist/168.market/hunt'));
    } catch (err) {
      console.error(`exec error: ${err}`);
      throw err;
    }
  })();

  lst = [ActCrd.TEST_CARDANO, ActMrk.UPDATE_MARKET, ActMrk.INIT_MARKET, ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActCrd.TEST_CARDANO:
      bit = await MARKET.hunt(ActCrd.TEST_CARDANO, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMrk.UPDATE_MARKET:
      bit = await MARKET.hunt(ActMrk.UPDATE_MARKET, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMrk.INIT_MARKET:
      bit = await MARKET.hunt(ActMrk.INIT_MARKET, {})
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

  setTimeout(async () => { bit = await ste.hunt(ActMnu.MARKET_MENU, {}) }, 3)

  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });



