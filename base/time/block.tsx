import React from 'react';

import Time from "../../001.time/99.core/state";
import * as Import from "../../001.time/BEE";

import * as PIVOT from '../pivot'

interface Sim {
    hunt: (typ: string, obj?: any) => Promise<any>;
    state: State | null;
}

interface State {
    pivot: Sim;
    hunt: (typ: string, obj?: any) => Promise<any>;
    dispatch(action: { type: string; bale: any }): void;
}


export default function TimeBlock() {
    console.log( PIVOT.TIME + " block");

    let sim: Sim = {
        hunt: (typ, obj) => Promise.resolve({}),
        state: null,
    };

    sim.hunt = (typ: string, obj: any) => { return host(obj, typ); };

    var host = (obj: any, typ: string): Promise<any> => {
        init();

        var slv: (value: any) => void;
        const promo = new Promise<any>((rslv) => (slv = rslv));

        if (obj == null) obj = {};
        if (obj.slv == null) obj.slv = (val0: any) => slv(val0);

        sim.state!.dispatch({ type: typ, bale: obj });
        return promo;
    };

    var init = (): void => {
        if (sim.state != null) return;
        sim.state = new Time();
        sim.state.pivot = sim;
        sim.state.hunt = sim.hunt;
        for (var k in Import.list) {
            new Import.list[k](sim.state);
        }
    };

    if (typeof window !== 'undefined' && (window as any)[  PIVOT.TIME ] == null) {
        (window as any)[ PIVOT.TIME ] = sim.hunt;
    }

    return (
        <></>
    );
}
