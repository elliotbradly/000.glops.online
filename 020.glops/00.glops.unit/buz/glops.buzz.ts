
import { GlopsModel } from "../glops.model";
import glopsBit from "../fce/glops.bit";
import State from "../../99.core/state";

export const initglops = (cpy: GlopsModel, bal: glopsBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-glops", dat: { src: 'genesis' } } });

    return cpy;
};
