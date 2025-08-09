

import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const accessControl = (cpy: ControlModel, bal: ControlBit, ste: State) => {
  cpy.access = bal.val

  cpy.lastUpdateTimeLong = 0;
  cpy.deltaHoldLong = 0;

  cpy.lastUpdateTimeShort = 0;
  cpy.deltaHoldShort = 0;

  cpy.shortValue = cpy.maxShort

  cpy.tinyCount = 0;

  cpy.delayUntil = Date.now() + 100;

  var clientLocal = cpy.clientLocal;
  var serverLocal = cpy.serverLocal;

  var localLocation = cpy.localLocation;
  var remoteLocation = cpy.remoteLocation

  bal.slv({ ctlBit: { idx: "access-control", val: cpy.access, dat: { clientLocal, serverLocal, localLocation, remoteLocation } } });
  return cpy;
};
