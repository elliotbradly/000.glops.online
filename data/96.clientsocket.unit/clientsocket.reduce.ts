import * as clone from "clone-deep";
import * as Act from "./clientsocket.action";
import { ClientsocketModel } from "./clientsocket.model";
import * as Buzz from "./clientsocket.buzzer";
import State from "../99.core/state";

export function reducer(model: ClientsocketModel = new ClientsocketModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CLIENTSOCKET:
 return Buzz.updateClientsocket(clone(model), act.bale, state);

 case Act.INIT_CLIENTSOCKET:
 return Buzz.initClientsocket(clone(model), act.bale, state);

case Act.OPEN_CLIENTSOCKET:
 return Buzz.openClientsocket(clone(model), act.bale, state);
 
case Act.WRITE_CLIENTSOCKET:
 return Buzz.writeClientsocket(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
