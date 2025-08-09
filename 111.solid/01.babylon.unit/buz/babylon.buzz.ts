import * as BABYLON from 'babylonjs'
import HavokPhysics from "@babylonjs/havok";
//import "babylon-mmd/esm/Loader/pmxLoader";


import * as ActMku from "../../10.miku.unit/miku.action"
import * as ActScr from "../../08.screen.unit/screen.action"



declare const BABYLONMMD: any;

import * as ActBby from "../../01.babylon.unit/babylon.action";
//import * as ActFce from "../../02.surface.unit/surface.action";

var bit


export const initBabylon = async (cpy: BabylonModel, bal: BabylonBit, ste: State) => {

    debugger

    bal.slv({ intBit: { idx: "init-babylon" } });

    return cpy;
};

var opened = false
var recorder;


export const updateBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {


    return cpy;
};


export const recordBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {

    recorder.startRecording("000.webm", 22);


    bal.slv({ bbyBit: { idx: "record-babylon" } });

    return cpy;
};

export const actionBabylon = async (cpy: BabylonModel, bal: BabylonBit, ste: State) => {


    recorder.startRecording("000.webm", 60).then(async (videoBlob) => {

        const formData = new FormData();
        formData.append('video', videoBlob, "000.webm"); // 'video' must match the server-side field name

        try {
            const response = await fetch('/api/upload-video', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Upload successful:', data);
                // Handle success (e.g., display a message)
            } else {
                console.error('Upload failed:', response.status, response.statusText);
                // Handle error (e.g., display an error message)
            }
        } catch (error) {
            console.error('Error during upload:', error);
            // Handle network errors, etc.
        }


        //now send to primal mom

        // Do Something with the videoBlob.
    });



    //var recorder = new BABYLON.VideoRecorder(cpy.engine);
    //recorder.startRecording("000.webm", 22);





    bal.slv({ bbyBit: { idx: "action-babylon" } });
    return cpy;
};


export const cutBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {


    recorder.stopRecording()



    bal.slv({ bbyBit: { idx: "cut-babylon" } });
    return cpy;
};


export const cameraBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {

    bal.slv({ bbyBit: { idx: "camera-babylon" } });
    return cpy;
};


import { BabylonModel } from "../babylon.model";
import BabylonBit from "../fce/babylon.bit";
import State from "../../99.core/state";