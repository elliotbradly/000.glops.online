
import * as ActCtl from "../000.control/00.control.unit/control.action";

import * as ActTme from "../001.time/00.time.unit/time.action";
import * as ActClk from "../001.time/03.clock.unit/clock.action";

import { useQuery } from "@tanstack/react-query"

export function useInitTime() {
    return useQuery({
        queryFn: async () => {

            const { ctlBit: { dat: { clientLocal, serverLocal, localLocation, remoteLocation } } } = await window['CONTROL'](ActCtl.ACCESS_CONTROL, {});

            if (clientLocal) {
              return window['TIME'](ActTme.INIT_TIME, {});
            }
          
            let endpoint = '/api/initTimeLocal'
            
            if ( serverLocal == false ) endpoint = '/api/initTimeRemote'
            const response = await fetch(endpoint);
          
            if (!response.ok) {
              alert( `Network response was not ok. Status: ${response.status}` )
               throw new Error(`Network response was not ok. Status: ${response.status}`);
            }
          
            return response.json();
           
        },
        queryKey: ['initTime']
    })
}

export function useRandomTime(idx) {

    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActTme.RANDOM_TIME, { idx })
            return bit

        },
        queryKey: ['randomTime']
    })
}

export function useWriteClock(idx, clk) {
    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActClk.WRITE_CLOCK, { idx, clk })
            return bit

        },
        queryKey: ['writeClock']
    })
}

export function useWriteClockIncrement(idx, clk) {

    clk.yrs = 0;

    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActClk.WRITE_CLOCK, { idx, clk })
            return bit

        },
        queryKey: ['writeClockIncrement']
    })
}

export async function useReadClock(idx) {

    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActClk.READ_CLOCK, { idx })
            return bit

        },
        queryKey: ['readClock']
    })
}



export function useListClock() {
    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActClk.LIST_CLOCK, {})
            return bit

        },
        queryKey: ['listClock']
    })
}

