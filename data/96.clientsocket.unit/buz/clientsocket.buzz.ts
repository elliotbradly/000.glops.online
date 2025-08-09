import * as ActMnu from "../../98.menu.unit/menu.action";

//import * as ActRps from "../../01.rpgstage.unit/rpgstage.action";
import * as ActCsk from "../../96.clientsocket.unit/clientsocket.action";

//import * as ActBld from "../../00.blender.unit/blender.action";
//import * as ActHud from "../../10.hud.unit/hud.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

//import * as ActGit from "../../act/github.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

var init, update

export const initClientsocket = async (cpy: ClientsocketModel, bal: ClientsocketBit, ste: State) => {

    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'initing the client socket' });

    //const currentUrl = window.location.origin;

    //var socketLocation = currentUrl.replace('http', 'ws') + '/socket/';

    //if ( bal.val == 1 ) socketLocation = 'ws://localhost:1000/'

    var socketLocation = 'ws://localhost:1000/'
    //socketLocation = 'wss://render-com-hjy7.onrender.com/'

    var WebSocket = require('ws').WebSocket

    cpy.socket = new WebSocket(socketLocation);

    init = async (event) => {

        var initBit = JSON.parse(event.data)
        ste.hunt(initBit.idx, initBit.bal)
    }

    update = async ( event ) => {

            //    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'updating the client socket' });    
            bit = event.data
            bit = JSON.parse(bit)

            

            //console.log( bit )
            await ste.hunt( bit.idx,  bit.bal )
            bit = await ste.hunt(ActMnu.PRINT_MENU, {src:"updating..." + JSON.stringify( bit ) })
            //if (event.data != 'heartbeat') patch(ste, ActCsk.UPDATE_CLIENTSOCKET, { dat: JSON.parse(event.data) })
            //    else ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'beating heart' });
    
        }


    

    cpy.socket.addEventListener('message', update);
    cpy.socket.addEventListener("error", async (event) => {

        
        console.log("error.. ")

        bit = await ste.hunt(ActMnu.PRINT_MENU, {src:"socket error..."  })


        //ste.hunt( ActRps.WRITE_RPGSTAGE, { val:1, dat:{ERROR_MESSAGE:'cannot connect to the socket'} });
        //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.ERROR_MESSAGE, dat: { visible: true } });

    });

    bal.slv({ intBit: { idx: "init-clientsocket" } });
    return cpy;
};


export const writeClientsocket = (cpy: ClientsocketModel, bal: ClientsocketBit, ste: State) => {

    cpy.socket.send(JSON.stringify({ idx: bal.idx, bal: bal.dat }));
    
    bal.slv({ cskBit: { idx: "write-clientsocket" } });

    return cpy;
};

export const updateClientsocket = async (cpy: ClientsocketModel, bal: ClientsocketBit, ste: State) => {

    if (bal == null) bal = { idx, dat: {} }

    cpy.idx = bal.idx

    
    bit = await ste.hunt(ActMnu.PRINT_MENU, {src:"updating..." + cpy.idx})

    //var data = bal.dat.bal.dat;

   // var now = data.now;
    //var cde = data.cde;

    //bit = await ste.hunt( ActRps.TIME_RPGSTAGE, { val:0, dex:now, dat:{ cde }  });  
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: JSON.stringify(bal) });

    if (bal.slv != null) bal.slv({ cskBit: { idx: "update-clientsocket" } });
    return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const openClientsocket = (cpy: ClientsocketModel, bal: ClientsocketBit, ste: State) => {

    //var ActMod: ActivityModel = ste.value.activity;

    //debugger

    //cpy.idx = bal.idx;

   // update = async (event) => {


     //   debugger
        //    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'updating the client socket' });

      //  bit = event.data
       // bit = await ste.hunt(ActMnu.PRINT_MENU, bit)

        //if (event.data != 'heartbeat') patch(ste, ActCsk.UPDATE_CLIENTSOCKET, { dat: JSON.parse(event.data) })
        //    else ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'beating heart' });

   // }

    // var intBit = { intBit: { idx: bal.idx, dat: bal.dat } }

    // cpy.socket.send(JSON.stringify(intBit));

    //var sighBit = { idx: ActEng.UPDATE_ENGINE, dat: { idx: cpy.idx, auth: ActMod.auth } }

    //setInterval(() => {

    //    ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'set interval' });
    //    cpy.socket.send(JSON.stringify(sighBit));

    //}, 3333)

    cpy.socket.removeEventListener('message', init);
    cpy.socket.addEventListener('message', update);

    return cpy;
};


import { ClientsocketModel } from "../clientsocket.model";
import ClientsocketBit from "../fce/clientsocket.bit";
import State from "../../99.core/state";
//import WebSocket, { WebSocketServer } from 'ws';




//import { ActivityModel } from "../../80.activity.unit/activity.model";
//import * as HUD from "../../val/hud"