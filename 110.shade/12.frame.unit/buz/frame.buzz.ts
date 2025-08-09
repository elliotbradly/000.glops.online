import * as PIXI from "pixi.js";
import * as GRAPHIC from "../../val/graphic"
import * as SHADE from '../../val/shade'
import gsap from "gsap";
import * as ActFme from "../frame.action";
import { FrameModel } from "../frame.model";
import FrameBit from "../fce/frame.bit";
import State from "../../99.core/state";
import HoldBit from "../fce/hold.bit";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActVsg from "../../21.visage.unit/visage.action";

import * as ActCan from "../../03.container.unit/container.action";

import * as ActApp from "../../20.application.unit/application.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initFrame = (cpy: FrameModel, bal: FrameBit, ste: State) => {
  debugger
  return cpy;
};

export const updateFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  bit = await ste.hunt(ActFme.READ_FRAME, { idx: bal.idx })
  var dat: HoldBit = bit.fmeBit.dat;

  var appBit = await ste.hunt(ActApp.READ_APPLICATION, { idx: bal.src })

  var app = appBit.appBit.dat.bit;
  var canvas = app.canvas;
  
  var canBit = await ste.hunt( ActCan.READ_CONTAINER, { idx: dat.can })
  var container = canBit.canBit.dat.bit  
  
  var x = canvas.width *.5 - container.width * .5;
  var y = canvas.height *.5 - container.height * .5;

  x -= dat.x;
  y -= dat.y

  //canvas.width / 2 - player.x)
  //var camBit = bit.camBit.dat;
  //read the surface
  //bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.src })
  //var canBit = bit.canBit.bit;

  //bit = await ste.hunt( ActFce.READ_SURFACE, { idx: bal.src })

  var auto = container.getGlobalPosition()

   dat.twn = gsap.to( container, { y, x, duration: 1, ease: "linear" });

  if (bal.slv != null) return bal.slv({ fmeBit: { idx: "update-frame", dat } });

  return cpy;
};

export const readFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "frm00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActFme.CREATE_FRAME });
  if (slv != null) slv({ fmeBit: { idx: "read-frame", dat: bit.clcBit.dat } });
  return cpy;
};

export const writeFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  if (bal.idx == null) bal.idx = "frm00";

  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFme.CREATE_FRAME });
  ste.hunt(ActFme.UPDATE_FRAME, { idx: bal.idx })

  if (bal.slv != null) bal.slv({ fmeBit: { idx: "write-frame", dat: bit.clcBit.dat } });

  return cpy;
};
export const removeFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFme.DELETE_FRAME })
  if (bal.slv != null) bal.slv({ fmeBit: { idx: "remove-frame", dat: bit.clcBit } });

  return cpy;

};


export const createFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  

  var dat: HoldBit = { idx: bal.idx, src: bal.src, typ: 'core', x: 0, y: 0 };

  for (var key in bal.dat) {
    dat[key] = bal.dat[key]
  }

  dat
  

  bal.slv({ fmeBit: { idx: "create-frame", dat } });
  return cpy;
};

export const deleteFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {


  if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-delete-frame", dat: {} } });

  bit = await ste.hunt(ActFme.READ_FRAME, { idx: bal.idx })
  var dat: HoldBit = bit.fmeBit.dat

  var graphic = dat.bit;
  graphic.destroy()
  dat.bit = null

  if (bal.slv != null) return bal.slv({ fmeBit: { idx: "delete-frame", dat } });


  return cpy;
};

