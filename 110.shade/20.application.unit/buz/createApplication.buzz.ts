import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActApp from "../application.action";

import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";


import { Application, Assets, Container, Sprite } from 'pixi.js';

import { ApplicationModel } from "../application.model";
import ApplicationBit from "../fce/application.bit";
import AppBit from "../fce/app.bit";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const createApplication = async (cpy: ApplicationModel, bal: ApplicationBit, ste: State) => {
    var dat: AppBit = { idx: bal.idx, src: bal.src, bit:null };

    var el: HTMLElement | null = document.getElementById(dat.src as string)
    var app = new Application();

    dat.bit = app;

    await app.init({ background: '#00FFFF', resizeTo: el.parentElement });

    app.canvas.height = 112
    app.canvas.width = 960

    if (el != null) el.appendChild(app.canvas);

    
    // Center the bunny sprites in local container coordinates
    // container.pivot.x = container.width / 2;
    // container.pivot.y = container.height / 2;

    // const texture = await Assets.load('https://pixijs.com/assets/bunny.png');
    // const bunny = new Sprite(texture);
    // bunny.anchor.set(0.5);
    // bunny.x = app.screen.width / 2;
    // bunny.y = app.screen.height / 2;

    //app.stage.addChild(bunny);

    //await Assets.load([
    //    "./sprite/000/000.json"
    //]);

    //const animations = Assets.cache.get('./sprite/000/000.json').data.animations;

    //container.addChild( button)
    //app.stage.addChild( button)
    //button.onPress.connect(() => console.log('Button pressed!'));

    //bal.slv({ fceBit: { idx: "create-surface", dat:{bit:app} } });


    if (bal.dat != null) {
        for (var key in bal.dat) {
            dat[key] = bal.dat[key];
        }
    }

    bal.slv({ appBit: { idx: "create-application", dat: dat } });
    return cpy;
};

