export const initSolid = (cpy: SolidModel, bal: SolidBit, ste: State) => {





    if (bal.slv != null) bal.slv({ intBit: { idx: "init-solid" } });


    return cpy;
};

export const updateSolid = (cpy: SolidModel, bal: SolidBit, ste: State) => {
    return cpy;
};


export const shadeSolid = (cpy: SolidModel, bal:SolidBit, ste: State) => {
 debugger
 return cpy;
 };


 
import { SolidModel } from "../solid.model";
import SolidBit from "../fce/solid.bit";
import State from "../../99.core/state";