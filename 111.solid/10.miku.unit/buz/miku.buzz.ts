import { MikuModel } from "../miku.model";
import MikuBit from "../fce/miku.bit";
import State from "../../99.core/state";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActMku from "../miku.action";

import MmdBit from "../fce/mmd.bit"
import { BabylonModel } from "../../01.babylon.unit/babylon.model";

var bit, dat;

export const initMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {
    debugger
    return cpy;
};



export const updateMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {

    bit = await ste.hunt(ActMku.READ_MIKU, { idx: bal.idx })
    dat = bit.mkuBit.dat

    dat.bit.position = new BABYLON.Vector3(dat.position.x, dat.position.y, dat.position.z);

    bal.slv({ mkuBit: { idx: "update-miku" } });
    return cpy;
};

export const readMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActMku.CREATE_MIKU })
    //if (slv != null) slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });
    //return cpy;

    bal.slv({ mkuBit: { idx: "read-miku", dat: bit.clcBit.dat } });
    return cpy;
};


export const writeMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {


    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-write-miku", dat: {} } });

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMku.CREATE_MIKU })

    if (bit.clcBit.val != 0) ste.hunt(ActMku.UPDATE_MIKU, { idx: bal.idx })

    //if (bal.slv != null) bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });

    bal.slv({ mkuBit: { idx: "write-miku", dat: bit.clcBit.dat } });
    return cpy;
};

export const removeMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMku.DELETE_MIKU })
    if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-container", dat: bit.clcBit } });

    bal.slv({ mkuBit: { idx: "remove-miku" } });
    return cpy;
};


export const deleteMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {

    bal.slv({ mkuBit: { idx: "delete-miku" } });
    return cpy;
};

export const createMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {

    if (ste.value.babylon == null) {
        return alert("babylon error")
    }

    var modBab: BabylonModel = ste.value.babylon

    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-create-container", dat: {} } });

    //you have a source visage
    //now you wish to update a bit of the source visage
    var dat: any = {
        idx: bal.idx, src: bal.src,
        postition: { x: 0, y: 0, z: 0 },
        scale: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
    }

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    //real genius
    const mmdMesh = await BABYLON.SceneLoader.ImportMeshAsync(undefined, bal.src, undefined, modBab.scene).then((result) => result.meshes[0]);
    const modelMesh = mmdMesh as BABYLON.Mesh
    //modelMesh.receiveShadows = true;;

    //for(const mesh of modelMesh.metadata.meshes) shadowGenerator.addShadowCaster(mesh);

    const mmdModel = modBab.mmdRuntime.createMmdModel(modelMesh);

    mmdModel.addAnimation(modBab.motion);
    mmdModel.setAnimation("motion");
    modBab.mmdRuntime.playAnimation();

    dat.bit = modelMesh

    // if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })

    bal.slv({ mkuBit: { idx: "create-miku", dat } });
    return cpy;
};
