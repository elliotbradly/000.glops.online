import { HexagonModel } from "../hexagon.model";
import HexagonBit from "../fce/hexagon.bit";
import HexBit from "../fce/hex.bit";
import State from "../../99.core/state";
import * as Honeycomb from "honeycomb-grid";
import * as PIXI from "pixi.js";

import * as HEXAGON from "../../val/hexagon"
import * as DIRECTION from "../../val/direction"

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";
import * as ActHex from "../../07.hexagon.unit/hexagon.action";
import * as ActVsg from "../../21.visage.unit/visage.action";

var bit, val, idx, dex, lst, dat;

export const updateHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  bit = await ste.hunt(ActHex.READ_HEXAGON, { idx: bal.idx })
  var dat: HexBit = bit.hexBit.dat
  
  var map = dat.map



  if (map == null){ return bal.slv({ hexBit: { idx: "update-hexagon-error", src:'no map present' } });}
  dat.frm

  //var graphic = bal.dat.bit
  //var hexmap = bal.bit

  bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.dat.src })
  var graphic: PIXI.Graphics = bit.gphBit.dat.bit


  if ( graphic == null ) { return bal.slv({ hexBit: { idx: "update-hexagon-error", src:'no graphic present' } });}

  //var hexmap = bal.dat.bit

  graphic.clear()

  //graphic.rect(0, 0, 200, 100)
  //graphic.fill(0xffffff);
  //if (bal.slv != null) 

  const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(33), // default: 1
    orientation: 'flat', // default: 'pointy'
  });

  const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);
  const grid: Honeycomb.Grid = Grid(map);

  var pct = .25;
  var scl = 1

  graphic.lineStyle(3, 0xFF00FF, 10);
  grid

  grid.forEach((hex) => {
    const point = hex.toPoint();
    const corners = hex.corners().map((corner) => corner.add(point));
    const [firstCorner, ...otherCorners] = corners;

    graphic.moveTo(firstCorner.x * scl, firstCorner.y * scl * pct);
    otherCorners.forEach(({ x, y }) => graphic.lineTo(x * scl, y * scl * pct));
    graphic.lineTo(firstCorner.x * scl, firstCorner.y * scl * pct);

    

    graphic.stroke({ color: 0xff00ff, pixelLine: true });
  });

  bal.slv({ hexBit: { idx: "update-hexagon", dat: dat } });


  //switch (dat.frm) {

  //  case HEXAGON.FOCUS:
  //    ste.hunt(ActHex.FOCUS_HEXAGON, { dat, bit: bal.dat })
  //    break

  //   case HEXAGON.HEXMAP:
  //     ste.hunt(ActHex.HEXMAP_HEXAGON, { dat, bit: bal.dat })
  //     break
  // }

  
  return cpy;
};