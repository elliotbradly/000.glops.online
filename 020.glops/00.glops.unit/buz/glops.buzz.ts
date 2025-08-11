import { GlopsModel } from "../glops.model";
import GlopsBit from "../fce/glops.bit";
import State from "../../99.core/state";

export const initGlops = (cpy: GlopsModel, bal: GlopsBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-glops", dat: { src: 'genesis' } } });
    return cpy;
};



export const testGlops = (cpy: GlopsModel, bal: GlopsBit, ste: State) => {
    bal.slv({ glpBit: { idx: "test-glops", dat: { src: 'genesis' } } });
    return cpy;
};

