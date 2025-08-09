import * as ActClk from "../../act/clock.action";
import * as ActTme from "../../act/time.action";
import * as ActInc from "../../act/increment.action";

import * as ActCan from "../../act/container.action";
import * as ActGph from "../../act/graphic.action";
import * as ActTxt from "../../act/text.action";
import * as ActMap from "../../act/hexmap.action";
import * as ActFoc from "../../act/focus.action";
import * as ActHex from "../../act/hexagon.action";
import * as ActFgn from "../../act/focigon.action";
import * as ActFme from "../../act/frame.action";
import * as ActApp from "../../act/application.action";

import * as ActBby from "../../act/babylon.action";
import * as ActMku from "../../act/miku.action";
import * as ActScr from "../../act/screen.action";



import * as PVT from '../../val/pivot'

import * as ActCtl from '../control.action'
import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const openControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  cpy.opened = 1;

  
  //now for the colors




  //NEED DOCUMENT TO MAKE THESE CALLS WORK
  //NEED DOCUMENT TO MAKE THESE CALLS WORK
  //NEED DOCUMENT TO MAKE THESE CALLS WORK

  if (typeof document === 'undefined') return bal.slv({ ctlBit: { idx: "open-control", src: 'no document' } });
  if (document === undefined) return bal.slv({ ctlBit: { idx: "open-control", src: 'no document' } });

  await new Promise(resolve => setTimeout(resolve, 10));

  await ste.hunt(ActCtl.DATA_CONTROL, { src: 'color-list' })
  
  //bit = await window[PVT.SHADE](ActApp.WRITE_APPLICATION, { idx: 'app00', src: 'surface00' })

  //var app = bit.appBit.dat.bit

  //bit = await window[PVT.SHADE](ActCan.WRITE_CONTAINER, { idx: 'can00', src: 'app00' })
 // dat = bit.canBit.dat;
 // var container = dat['bit']
  //app.stage.addChild(container);

  //bit = await window[PVT.SHADE](ActGph.WRITE_GRAPHIC, { idx: 'gph00' })
  //dat = bit.gphBit.dat;
  //var graphic = dat['bit']
  //container.addChild(graphic)

  //bit = await window[PVT.SHADE](ActGph.WRITE_GRAPHIC, { idx: 'gph01' })
  //dat = bit.gphBit.dat;
  //var graphic = dat['bit']
  //container.addChild(graphic)

  //graphic.rect(1, 1, 950, 115)
  //graphic.fill(0x0ff00);

  //container.x = app.screen.width / 2;
  //container.y = app.screen.height / 2;

  //bit = await window[PVT.SHADE](ActTxt.WRITE_TEXT, { idx: 'txt00', dat: { txt: '' } })
  //dat = bit.txtBit.dat;
  //var text = dat['bit']
  //app.stage.addChild(text)

  //bit = await window[PVT.SHADE](ActHex.WRITE_HEXAGON, { idx: 'hex00', dat: { dat: { gph: 'gph00', bit: map } } })
  //bit = await window[PVT.SHADE](ActFgn.WRITE_FOCIGON, { idx: 'fgn00', src: 'app00', dat: { gph: 'gph01', bit: focus } })

  //var text = dat['bit']
  //app.stage.addChild(text)

  

  await window['SOLID'](ActBby.OPEN_BABYLON, { src: 'surface00' })
  await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku00a', src: 'greasi/00.pmx', dat: { position: { z: -7 } } })
  await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku00a', dat: { position: { z: 40, x: -15 } } })
  await window['SOLID'](ActScr.WRITE_SCREEN, { idx: 'src00' })

  bal.slv({ ctlBit: { idx: "open-control" } });
  return cpy;
};

