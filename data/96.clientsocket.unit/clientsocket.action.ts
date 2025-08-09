import { Action } from "../99.core/interface/action.interface";
import  ClientsocketBit  from "./fce/clientsocket.bit";

// Clientsocket actions

export const INIT_CLIENTSOCKET = "[Clientsocket action] Init Clientsocket";
export class InitClientsocket implements Action {
 readonly type = INIT_CLIENTSOCKET;
 constructor(public bale: ClientsocketBit) {}
}

export const UPDATE_CLIENTSOCKET = "[Clientsocket action] Update Clientsocket";
export class UpdateClientsocket implements Action {
 readonly type = UPDATE_CLIENTSOCKET;
 constructor(public bale: ClientsocketBit) {}
}

export const OPEN_CLIENTSOCKET = "[Open action] Open Clientsocket";
 export class OpenClientsocket implements Action {
 readonly type = OPEN_CLIENTSOCKET;
 constructor(public bale: ClientsocketBit) {}
 }
 
export const WRITE_CLIENTSOCKET = "[Write action] Write Clientsocket";
 export class WriteClientsocket implements Action {
 readonly type = WRITE_CLIENTSOCKET;
 constructor(public bale: ClientsocketBit) {}
 }
 
export type Actions = | InitClientsocket | UpdateClientsocket 
| OpenClientsocket
| WriteClientsocket