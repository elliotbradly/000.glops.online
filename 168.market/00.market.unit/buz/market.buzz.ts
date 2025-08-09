
import * as ActMrk from "../market.action"
import * as ActDsk from "../../act/disk.action";
import * as ActStg from "../../act/stage.action";
import * as ActGph from "../../act/graphic.action";
import * as ActClk from "../../act/clock.action";
import * as ActTme from "../../act/time.action";

import * as ActBus from "../../99.bus.unit/bus.action";

var bit, idx, val, src, dat

export const initMarket = async (cpy: MarketModel, bal: MarketBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-market" } });
    return cpy;
};

export const updateMarket = (cpy: MarketModel, bal: MarketBit, ste: State) => {

    bal.slv({ mrkBit: { idx: "update-market" } });

    return cpy;
};


import { MarketModel } from "../market.model";
import MarketBit from "../fce/market.bit";
import State from "../../99.core/state";