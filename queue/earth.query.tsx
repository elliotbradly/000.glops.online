
import { useQuery } from "@tanstack/react-query"

import * as ActEth from "../000.earth/00.earth.unit/earth.action";
import * as ActCtl from "../000.control/00.control.unit/control.action";

export function useInitEarth() {
    return useQuery({
        queryFn: async () => {
            var bit = await window['EARTH'](ActEth.INIT_EARTH, {})
            return bit

        },
        queryKey: ['initPixel']
    })
}


export function useUpdateEarth() {
    return useQuery({
        queryFn: async () => {

            const { ctlBit: { dat: { clientLocal, serverLocal, localLocation, remoteLocation } } } = await window['CONTROL'](ActCtl.ACCESS_CONTROL, {});

            if (clientLocal) {
                return window['EARTH'](ActEth.UPDATE_EARTH, {});
            }

            let endpoint = '/api/updateEarthLocal'

            if (serverLocal == false) endpoint = '/api/updateEarthRemote'
            const response = await fetch(endpoint);

            if (!response.ok) {
                alert(`Network response was not ok. Status: ${response.status}`)
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            return response.json();

        },
        refetchInterval: 1000,
        staleTime: 1000,
        queryKey: ['updateEarth']
    })
}