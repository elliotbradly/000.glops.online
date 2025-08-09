import * as ActMnu from "../menu.action";
const path = require('path');
var exec = require('child_process').exec;

import * as ActEth from "../../act/earth.action";

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

import * as ActGrd from "../../act/grid.action";
import * as ActClr from "../../act/color.action";

import * as PVT from '../../val/pivot'

var bit, lst, dex, idx, dat, src;

var EARTH, TIME, SPACE, SOWER;

export const earthMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var FS = require('fs-extra')

  await (async () => {
    try {

      if (global.EARTH == null) await new Promise<void>((resolve, reject) => exec('tsc -b 000.earth', err => err ? reject(err) : resolve()));

      if (global.EARTH == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled earth" });
      if (global.EARTH == null) global.EARTH = EARTH = require(path.resolve('./dist/000.earth/hunt'));

      if (global.TIME == null) await new Promise<void>((resolve, reject) => exec('tsc -b 001.time', err => err ? reject(err) : resolve()));

      if (global.TIME == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled time" });
      if (global.TIME == null) TIME = global.TIME = require(path.resolve('./dist/001.time/hunt'));
      if (window[PVT.TIME] == null) window[PVT.TIME] = TIME.hunt

      if (global.SPACE == null) await new Promise<void>((resolve, reject) => exec('tsc -b 002.space', err => err ? reject(err) : resolve()));

      if (global.SPACE == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled space" });
      if (global.SPACE == null) SPACE = global.SPACE = require(path.resolve('./dist/002.space/hunt'));
      if (window[PVT.SPACE] == null) window[PVT.SPACE] = SPACE.hunt


      if (global.SOWER == null) await new Promise<void>((resolve, reject) => exec('tsc -b 010.sower', err => err ? reject(err) : resolve()));

      if (global.SOWER == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled sower" });
      if (global.SOWER == null) SOWER = global.SOWER = require(path.resolve('./dist/010.sower/hunt'));
      if (window[PVT.SOWER] == null) window[PVT.SOWER] = SOWER.hunt

      lst = FS.readJsonSync('./public/data/color/000.color.name.json')
      bit = await EARTH.hunt(ActClr.OPEN_COLOR, { lst })

    } catch (err) {
      console.error(`exec error: ${err}`);
      throw err;
    }
  })();

  lst = [ ActEth.UPDATE_EARTH, ActEth.ACCESS_EARTH, ActEth.OPEN_EARTH, ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActEth.ACCESS_EARTH:
      bit = await EARTH.hunt(ActEth.ACCESS_EARTH, { val: 1 })

      setTimeout(() => { EARTH.hunt(ActEth.ACCESS_EARTH, { val: 0 }) }, 1111)

      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActEth.OPEN_EARTH:
      bit = await EARTH.hunt(ActEth.OPEN_EARTH, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActEth.UPDATE_EARTH:
      bit = await EARTH.hunt(ActEth.UPDATE_EARTH, {})
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

    bit = await ste.hunt(ActMnu.EARTH_MENU, {})

  }, 3)



  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });



