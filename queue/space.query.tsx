
import * as ActSpc from "../002.space/00.space.unit/space.action";
import { useQuery } from "@tanstack/react-query"

export function useInitSpace() {
    return useQuery({
        queryFn: async () => {

            var bit = await window['SPACE']( ActSpc.INIT_SPACE, {})
            return bit

        },
        queryKey: ['initSpace']
    })
}

