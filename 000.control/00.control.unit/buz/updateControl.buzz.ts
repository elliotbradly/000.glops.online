import * as ActClk from "../../act/clock.action";
import * as ActEth from "../../act/earth.action";

import * as ActCtr from "../../00.control.unit/control.action";

import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";

import * as PVT from '../../val/pivot'

var bit, val, idx, dex, lst, dat, src;

export const updateControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  if (cpy.opened == 0) {
    bit = await ste.hunt(ActCtr.OPEN_CONTROL, {})
    bit = window[ PVT.EARTH ](ActEth.OPEN_EARTH, {})
  }
  
  
  // 1. Handle manual override first for immediate action.
  if (bal.val === 1) {
    bit = await ste.hunt(ActCtr.ADVANCE_CONTROL, {})
    bit = await ste.hunt(ActCtr.OUTPUT_CONTROL, {})
    dat = bit.ctlBit.dat
    bal.slv({ ctlBit: { idx: "update-control", dat } });
    return cpy;
  }

  // --- NEW DELAY CHECK ---
  // 2. Enforce the delay for automatic updates.
  // If the current time is before our target delay time, do nothing and exit.
  if (Date.now() < cpy.delayUntil) {
    // We are still within the 100ms delay period.
    // The time that passes here will be correctly calculated on the first update AFTER the delay ends.
    bit = await ste.hunt(ActCtr.OUTPUT_CONTROL, {})
    dat = bit.ctlBit.dat
    bal.slv({ ctlBit: { idx: "update-control", dat } });
    return cpy;
  }

  // 2. Determine the parameters for the current mode (slow or fast tick).
  const isSlowMode = cpy.access === 0;
  const lastUpdateKey = isSlowMode ? 'lastUpdateTimeLong' : 'lastUpdateTimeShort';
  const deltaHoldKey = isSlowMode ? 'deltaHoldLong' : 'deltaHoldShort';
  const threshold = isSlowMode ? cpy.maxLong : cpy.shortValue;

  // 3. Unified Game Loop Logic.
  const now = Date.now();
  if (!cpy[lastUpdateKey]) {
    cpy[lastUpdateKey] = now; // Initialize time if it's the first run for this mode.
  }

  const timeDelta = now - cpy[lastUpdateKey];
  cpy[lastUpdateKey] = now;
  cpy[deltaHoldKey] += timeDelta;

  // 4. Process all accumulated ticks. (Crucial for handling idle time)
  // Using 'while' instead of 'if' ensures we "catch up" on all missed ticks.
  while (cpy[deltaHoldKey] >= threshold) {
    bit = await ste.hunt(ActCtr.ADVANCE_CONTROL, {})
    cpy[deltaHoldKey] -= threshold;

    // 5. Handle logic specific to the "fast tick" mode.
    if (!isSlowMode) {
      cpy.tinyCount += 1;
      if (cpy.tinyCount > cpy.tinyMax) {
        cpy.shortValue = cpy.maxTiny; // The fast tick rate can change over time.
      }
    }
  }

  // 6. Final callback, same for all paths.

  bit = await ste.hunt(ActCtr.OUTPUT_CONTROL, {})
  dat = bit.ctlBit.dat
  
  bal.slv({ ctlBit: { idx: "update-control", dat } });

  return cpy;

};

