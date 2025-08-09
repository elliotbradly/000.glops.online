import { Action } from "../99.core/interface/action.interface";
import ColorBit from "./fce/color.bit";
export declare const INIT_COLOR = "[Color action] Init Color";
export declare class InitColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Init Color";
    constructor(bale: ColorBit);
}
export declare const UPDATE_COLOR = "[Color action] Update Color";
export declare class UpdateColor implements Action {
    bale: ColorBit;
    readonly type = "[Color action] Update Color";
    constructor(bale: ColorBit);
}
export declare const OPEN_COLOR = "[Open action] Open Color";
export declare class OpenColor implements Action {
    bale: ColorBit;
    readonly type = "[Open action] Open Color";
    constructor(bale: ColorBit);
}
export declare const READ_COLOR = "[Read action] Read Color";
export declare class ReadColor implements Action {
    bale: ColorBit;
    readonly type = "[Read action] Read Color";
    constructor(bale: ColorBit);
}
export declare const WRITE_COLOR = "[Write action] Write Color";
export declare class WriteColor implements Action {
    bale: ColorBit;
    readonly type = "[Write action] Write Color";
    constructor(bale: ColorBit);
}
export declare const REMOVE_COLOR = "[Remove action] Remove Color";
export declare class RemoveColor implements Action {
    bale: ColorBit;
    readonly type = "[Remove action] Remove Color";
    constructor(bale: ColorBit);
}
export declare const DELETE_COLOR = "[Delete action] Delete Color";
export declare class DeleteColor implements Action {
    bale: ColorBit;
    readonly type = "[Delete action] Delete Color";
    constructor(bale: ColorBit);
}
export declare const CREATE_COLOR = "[Create action] Create Color";
export declare class CreateColor implements Action {
    bale: ColorBit;
    readonly type = "[Create action] Create Color";
    constructor(bale: ColorBit);
}
export declare const LIST_COLOR = "[List action] List Color";
export declare class ListColor implements Action {
    bale: ColorBit;
    readonly type = "[List action] List Color";
    constructor(bale: ColorBit);
}
export declare const RANDOM_COLOR = "[Random action] Random Color";
export declare class RandomColor implements Action {
    bale: ColorBit;
    readonly type = "[Random action] Random Color";
    constructor(bale: ColorBit);
}
export declare const BASKET_COLOR = "[Basket action] Basket Color";
export declare class BasketColor implements Action {
    bale: ColorBit;
    readonly type = "[Basket action] Basket Color";
    constructor(bale: ColorBit);
}
export declare const ACCESS_COLOR = "[Access action] Access Color";
export declare class AccessColor implements Action {
    bale: ColorBit;
    readonly type = "[Access action] Access Color";
    constructor(bale: ColorBit);
}
export type Actions = InitColor | UpdateColor | OpenColor | ReadColor | WriteColor | RemoveColor | DeleteColor | CreateColor | ListColor | RandomColor | BasketColor | AccessColor;
