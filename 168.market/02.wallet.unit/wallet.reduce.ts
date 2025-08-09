import * as clone from "clone-deep";
import * as Act from "./wallet.action";
import { WalletModel } from "./wallet.model";
import * as Buzz from "./wallet.buzzer";
import State from "../99.core/state";

export function reducer(model: WalletModel = new WalletModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_WALLET:
 return Buzz.updateWallet(clone(model), act.bale, state);

 case Act.INIT_WALLET:
 return Buzz.initWallet(clone(model), act.bale, state);

case Act.READ_WALLET:
 return Buzz.readWallet(clone(model), act.bale, state);
 
case Act.WRITE_WALLET:
 return Buzz.writeWallet(clone(model), act.bale, state);
 
case Act.REMOVE_WALLET:
 return Buzz.removeWallet(clone(model), act.bale, state);
 
case Act.DELETE_WALLET:
 return Buzz.deleteWallet(clone(model), act.bale, state);
 
case Act.CREATE_WALLET:
 return Buzz.createWallet(clone(model), act.bale, state);
 
 default:
 return model;
 }
}