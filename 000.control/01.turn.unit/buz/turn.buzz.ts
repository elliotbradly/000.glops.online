
import { TurnModel } from "../turn.model";
import TurnBit from "../fce/turn.bit";
import State from "../../99.core/state";


import * as ActTrn from "../../01.turn.unit/turn.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

import * as ActCrd from "../../act/cardano.action";
import * as ActBlk from "../../act/block.action";

var bit, val, idx, dex, lst, dat, src;

export const initTurn = async (cpy: TurnModel, bal: TurnBit, ste: State) => {


  bal.slv({ intBit: { idx: "init-turn" } });

  return cpy;
};

export const updateTurn = async (cpy: TurnModel, bal: TurnBit, ste: State) => {


  
  var diff = bit.blkBit.dat.diff

  if (diff == 0) {

    bal.slv({ trnBit: { idx: "update-turn", dat: bit } });
    return cpy
  }

  diff

  //autho code to maniuplate

  bal.slv({ trnBit: { idx: "update-turn", dat: bit } });
  return cpy;
};



export const openTurn = async (cpy: TurnModel, bal: TurnBit, ste: State) => {

  bal.slv({ trnBit: { idx: "open-turn", dat: bit } });

  return cpy;
};




export const readTurn = (cpy: TurnModel, bal: TurnBit, ste: State) => {
  debugger
  return cpy;
};


export const startTurn = (cpy: TurnModel, bal: TurnBit, ste: State) => {

  bal.slv({ trnBit: { idx: "start-turn", dat: bit } });

  return cpy;
};