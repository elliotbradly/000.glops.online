import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActWlt from "../wallet.action";

import { WalletModel } from "../wallet.model";
import WalletBit from "../fce/wallet.bit";
import PurseBit from "../fce/purse";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const initWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {
    bal.slv({ intBit: { idx: "init-wallet" } });
    return cpy;
};

export const updateWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {
    bal.slv({ wltBit: { idx: "update-wallet" } });
    return cpy;
};

export const readWallet = async (cpy: WalletModel, bal: WalletBit, ste: State) => {
    if (bal.idx == null) bal.idx = 'wlt00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActWlt.CREATE_WALLET });
    if (bal.slv != null) bal.slv({ wltBit: { idx: "read-wallet", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeWallet = async (cpy: WalletModel, bal: WalletBit, ste: State) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActWlt.CREATE_WALLET });
    if (bal.slv != null) bal.slv({ wltBit: { idx: "write-wallet", dat: bit.clcBit.dat } });
    return cpy;
};

export const removeWallet = async (cpy: WalletModel, bal: WalletBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, bit: ActWlt.DELETE_WALLET });
    if (bal.slv != null) bal.slv({ wltBit: { idx: "remove-wallet", dat: bit.clcBit.dat } });
    return cpy;
};

export const deleteWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {
    if (bal.slv != null) bal.slv({ wltBit: { idx: "delete-wallet" } });
    return cpy;
};

export const createWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {
    var dat: PurseBit = { idx: bal.idx, src: "default-wallet", balance: 0, transactions: [] };
    
    if (bal.dat != null) {
        for (var key in bal.dat) {
            dat[key] = bal.dat[key];
        }
    }
    
    bal.slv({ wltBit: { idx: "create-wallet", dat: dat } });
    return cpy;
};