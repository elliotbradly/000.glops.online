
import * as ActCtl from "../000.control/00.control.unit/control.action";
import { useQuery } from "@tanstack/react-query"


export function useInitControl() {
    return useQuery({
        queryFn: async () => {
            var bit = await window['CONTROL']( ActCtl.INIT_CONTROL, {})
            return bit

        },
        queryKey: ['initControl']
    })
}

