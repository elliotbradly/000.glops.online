
import { CardanoModel } from "../cardano.model";
import CardanoBit from "../fce/cardano.bit";
import State from "../../99.core/state";

export const initCardano = (cpy: CardanoModel, bal: CardanoBit, ste: State) => {
    debugger
    return cpy;
};

export const updateCardano = (cpy: CardanoModel, bal: CardanoBit, ste: State) => {
    
    

    
    return cpy;
};


export const testCardano = (cpy: CardanoModel, bal: CardanoBit, ste: State) => {

    bal.slv({ mrkBit: { idx: "test-cardano" } });

    return cpy;
};

