import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActApp from "../application.action";

import { Application, Assets, Container, Sprite } from 'pixi.js';

import { ApplicationModel } from "../application.model";
import ApplicationBit from "../fce/application.bit";
import AppBit from "../fce/app.bit";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const initApplication = (cpy: ApplicationModel, bal: ApplicationBit, ste: State) => {
    bal.slv({ intBit: { idx: "init-application" } });
    return cpy;
};

export const updateApplication = (cpy: ApplicationModel, bal: ApplicationBit, ste: State) => {
    bal.slv({ appBit: { idx: "update-application" } });
    return cpy;
};

export const readApplication = async (cpy: ApplicationModel, bal: ApplicationBit, ste: State) => {
    if (bal.idx == null) bal.idx = 'app00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActApp.CREATE_APPLICATION });
    if (bal.slv != null) bal.slv({ appBit: { idx: "read-application", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeApplication = async (cpy: ApplicationModel, bal: ApplicationBit, ste: State) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src:bal.src, dat: bal.dat, bit: ActApp.CREATE_APPLICATION });
    if (bal.slv != null) bal.slv({ appBit: { idx: "write-application", dat: bit.clcBit.dat } });
    return cpy;
};

export const removeApplication = async (cpy: ApplicationModel, bal: ApplicationBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, bit: ActApp.DELETE_APPLICATION });
    if (bal.slv != null) bal.slv({ appBit: { idx: "remove-application", dat: bit.clcBit.dat } });
    return cpy;
};

export const deleteApplication = (cpy: ApplicationModel, bal: ApplicationBit, ste: State) => {
    if (bal.slv != null) bal.slv({ appBit: { idx: "delete-application" } });
    return cpy;
};


export const testApplication = (cpy: ApplicationModel, bal: ApplicationBit, ste: State) => {

    

    bal.slv({ appBit: { idx: "test-application", val: 1 } });

    return cpy;
};