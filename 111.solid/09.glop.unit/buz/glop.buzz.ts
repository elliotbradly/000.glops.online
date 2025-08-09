import { GlopModel } from "../glop.model";
import GlopBit from "../fce/glop.bit";
import State from "../../99.core/state";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActGlp from "../glop.action";
import GlpBit from "../fce/glp.bit";

import { BabylonModel } from "../../01.babylon.unit/babylon.model";


var bit, dat;

export const initGlop = (cpy: GlopModel, bal: GlopBit, ste: State) => {
    debugger
    return cpy;
};

export const updateGlop = async (cpy: GlopModel, bal: GlopBit, ste: State) => {
    bit = await ste.hunt(ActGlp.READ_GLOP, { idx: bal.idx })
    dat = bit.mkuBit.dat

    //dat.bit.position = new BABYLON.Vector3(dat.position.x, dat.position.y, dat.position.z);

    bal.slv({ mkuBit: { idx: "update-miku" } });
};


export const readGlop = async (cpy: GlopModel, bal: GlopBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActGlp.CREATE_GLOP })
    //if (slv != null) slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });
    //return cpy;

    bal.slv({ glpBit: { idx: "read-glop", dat: bit.clcBit.dat } });
    return cpy;
};
export const writeGlop = async (cpy: GlopModel, bal: GlopBit, ste: State) => {
    
    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-write-miku", dat: {} } });

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActGlp.CREATE_GLOP })

    if (bit.clcBit.val != 0) ste.hunt( ActGlp.UPDATE_GLOP, { idx: bal.idx })

    //if (bal.slv != null) bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });

    bal.slv({ glpBit: { idx: "write-glop", dat: bit.clcBit.dat } });
};
export const deleteGlop = async (cpy: GlopModel, bal: GlopBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActGlp.CREATE_GLOP })
    
    bal.slv({ glpBit: { idx: "remove-miku" } });
};
export const createGlop = async (cpy: GlopModel, bal: GlopBit, ste: State) => {
    
    //you have a source visage
    //now you wish to update a bit of the source visage
    var dat: GlpBit = {idx: bal.idx, src: ''}

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    
    var modBab: BabylonModel = ste.value.babylon

    //real genius
    const mesh = await BABYLON.SceneLoader.ImportMeshAsync(undefined, './hexTile.glb', undefined, modBab.scene).then((result) => result.meshes[0]);
    debugger
    //const modelMesh = mmdMesh as BABYLON.Mesh
    //modelMesh.receiveShadows = true;;

    modBab.scene.stopAllAnimations();

    //for(const mesh of modelMesh.metadata.meshes) shadowGenerator.addShadowCaster(mesh);

    //const mmdModel = modBab.mmdRuntime.createMmdModel(modelMesh);

    //mmdModel.addAnimation(modBab.motion);
    //mmdModel.setAnimation("motion");
    //modBab.mmdRuntime.playAnimation();

    //dat.bit = modelMesh

    // if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })

    bal.slv({ mkuBit: { idx: "create-miku", dat } });
    return cpy;
};


export const removeGlop = (cpy: GlopModel, bal: GlopBit, ste: State) => {
    debugger
    return cpy;
};