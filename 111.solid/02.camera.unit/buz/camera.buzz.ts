import { CameraModel } from "../camera.model";
import CameraBit from "../fce/camera.bit";
import State from "../../99.core/state";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActCam from "../camera.action";

import CamBit from "../fce/camera.bit"
import { BabylonModel } from "../../01.babylon.unit/babylon.model";


var bit, dat;

export const initCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
    debugger
    return cpy;
};

export const updateCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {

    //bit = await ste.hunt(ActMku.READ_MIKU, { idx: bal.idx })
    //dat = bit.mkuBit.dat

    //dat.bit.position = new BABYLON.Vector3( dat.position.x, dat.position.y,  dat.position.z);

    //var can: PIXI.Container = dat.bit;

    //can.x = dat.x;
    //can.y = dat.y;

    bal.slv({ mkuBit: { idx: "update-camera" } });
    return cpy;
};


export const readCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCam.CREATE_CAMERA })
    //if (slv != null) slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });
    //return cpy;

    bal.slv({ mkuBit: { idx: "read-camera", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {

    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-write-camera", dat: {} } });

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCam.CREATE_CAMERA })

    if (bit.clcBit.val != 0) ste.hunt(ActCam.UPDATE_CAMERA, { idx: bal.idx })

    //if (bal.slv != null) bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });

    bal.slv({ mkuBit: { idx: "write-camera", dat: bit.clcBit.dat } });
};

export const removeCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCam.CREATE_CAMERA })
    if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-container", dat: bit.clcBit } });

    bal.slv({ mkuBit: { idx: "remove-miku" } });
    return cpy;
};

export const deleteCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    bal.slv({ mkuBit: { idx: "delete-miku" } });
};

export const createCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    if (ste.value.babylon == null) {
        return alert("babylon error")
    }

    var modBab: BabylonModel = ste.value.babylon

    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-create-container", dat: {} } });

    //you have a source visage
    //now you wish to update a bit of the source visage
    var dat: CamBit = {
        idx: bal.idx, src: bal.src,
    }

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }


    bal.slv({ mkuBit: { idx: "create-camera", dat } });
    return cpy;
};
