import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";
const path = require('path');
var exec = require('child_process').exec;

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

import * as ActTrn from "../../act/turn.action";
import * as ActCtl from "../../act/control.action";
import * as ActClr from "../../act/color.action";

import * as PVT from '../../val/pivot'

var bit, lst, dex, idx, dat, src;

var CONTROL, TIME, SPACE, PIXEL, SOLID, SOWER, EARTH;

var opened = false;

export const controlMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var FS = require('fs-extra')
  
  await (async () => {
    try {

      await new Promise<void>((resolve, reject) => exec('tsc -b 000.control', err => err ? reject(err) : resolve()));

      if (global.CONTROL == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled control" });
      if (global.CONTROL == null) CONTROL = global.CONTROL = require(path.resolve('./dist/000.control/hunt'));

      await new Promise<void>((resolve, reject) => exec('tsc -b 001.time', err => err ? reject(err) : resolve()));

      if (global.TIME == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled time" });
      if (global.TIME == null) TIME = global.TIME = require(path.resolve('./dist/001.time/hunt'));
      if (window[ PVT.TIME ] == null) window[ PVT.TIME ] = TIME.hunt

      await new Promise<void>((resolve, reject) => exec('tsc -b 002.space', err => err ? reject(err) : resolve()));

      if (global.SPACE == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled space" });
      if (global.SPACE == null) SPACE = global.SPACE = require(path.resolve('./dist/002.space/hunt'));
      if (window[ PVT.SPACE ] == null) window[ PVT.SPACE ] = SPACE.hunt

      //await new Promise<void>((resolve, reject) => exec('tsc -b 111.solid', err => err ? reject(err) : resolve()));

      //if (global.SOLID == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled solid" });
      //if (global.SOLID == null) SOLID = global.SOLID = require(path.resolve('./dist/111.solid/hunt'));
      //if (window['SOLID'] == null) window['SOLID'] = SOLID.hunt

      await new Promise<void>((resolve, reject) => exec('tsc -b 010.sower', err => err ? reject(err) : resolve()));

      if (global.SOWER == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled sower" });
      if (global.SOWER == null) SOWER = global.SOWER = require(path.resolve('./dist/010.sower/hunt'));
      if (window[ PVT.SOWER ] == null) window[ PVT.SOWER ] = SOWER.hunt

      await new Promise<void>((resolve, reject) => exec('tsc -b 011.earth', err => err ? reject(err) : resolve()));

      if (global.EARTH == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled earth" });
      if (global.EARTH == null) EARTH = global.EARTH = require(path.resolve('./dist/011.earth/hunt'));
      if (window[PVT.EARTH] == null) window[PVT.EARTH] = EARTH.hunt


      
     // await new Promise<void>((resolve, reject) => exec('tsc -b 002.space', err => err ? reject(err) : resolve()));

     // if (global.SPACE == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled space" });
     // if (global.SPACE == null) SPACE = global.SPACE = require(path.resolve('./dist/002.space/hunt'));

     // await new Promise<void>((resolve, reject) => exec('tsc -b 400.pixel', err => err ? reject(err) : resolve()));

     // if (global.PIXEL == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled pixel" });
     // if (global.PIXEL == null) PIXEL = global.PIXEL = require(path.resolve('./dist/400.pixel/hunt'));


    } catch (err) {
      console.error(`exec error: ${err}`);
      throw err;
    }
  })();

  lst = [ ActCtl.UPDATE_CONTROL, ActCtl.OUTPUT_CONTROL,  ActTrn.START_TURN, ActCtl.TEST_CONTROL, ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActCtl.UPDATE_CONTROL:

    if ( opened == false ){
      opened = true;
 
      lst = FS.readJsonSync('./public/data/color/000.color.name.json')
      bit = await SOWER.hunt(ActClr.OPEN_COLOR, { lst })

    }

      bit = await CONTROL.hunt( ActCtl.UPDATE_CONTROL, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActTrn.START_TURN:
      bit = await CONTROL.hunt(ActTrn.START_TURN, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActCtl.TEST_CONTROL:
      bit = await CONTROL.hunt(ActCtl.TEST_CONTROL, {})
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

    bit = await ste.hunt(ActMnu.CONTROL_MENU, {})

  }, 333)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });
