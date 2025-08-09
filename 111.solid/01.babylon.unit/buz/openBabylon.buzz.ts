import * as BABYLON from 'babylonjs'
import HavokPhysics from "@babylonjs/havok";
//import "babylon-mmd/esm/Loader/pmxLoader";

import * as ActMku from "../../10.miku.unit/miku.action"
import * as ActScr from "../../08.screen.unit/screen.action"

import { BabylonModel } from "../babylon.model";
import BabylonBit from "../fce/babylon.bit";
import State from "../../99.core/state";

declare const BABYLONMMD: any;

import * as ActBby from "../../01.babylon.unit/babylon.action";
//import * as ActFce from "../../02.surface.unit/surface.action";

var bit

var opened = false
var recorder;

export const openBabylon = async (cpy: BabylonModel, bal: BabylonBit, ste: State) => {

    if (opened == true) {
        return
    }

    opened = true;

    async function getInitializedHavok() {
        return await HavokPhysics();
    }

    const canvas = document.getElementById(bal.src);

    canvas['height'] = 1080
    canvas['width'] = 1920

    const engine = new BABYLON.Engine(canvas as any, true);
    const scene = new BABYLON.Scene(engine);

    cpy.scene = scene;


    cpy.scene.clearColor = new BABYLON.Color3(0, 0, 0); 

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

    engine.runRenderLoop(function () {
        scene.render();
    });

    cpy.engine = engine

    const camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);

    const v0 = new BABYLON.Vector3(0, 0, 0)

    camera.setTarget(v0);
    camera.attachControl(canvas, true);

    //var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -10), scene);
    // Target the camera to scene origin
    //camera.setTarget(BABYLON.Vector3.Zero());
    // Attach the camera to the canvas
    //camera.attachControl(canvas, false);
    //camera.position.y = 10
    //camera.position.x = 0
    //camera.position.z = -30

    //FOLLOW
    //const camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);
    //camera.radius = 30;
    //camera.heightOffset = 10;
    //camera.rotationOffset = 0;
    //camera.cameraAcceleration = 0.005;
    //camera.maxCameraSpeed = 10;
    //camera.attachControl(canvas, true);
    recorder = new BABYLON.VideoRecorder(cpy.engine);

    globalThis.HK = await getInitializedHavok()

    await new Promise((resolve) => {
        const babylonMmdScript = document.createElement("script");
        babylonMmdScript.src = "./babylon.mmd.min.js";
        document.head.appendChild(babylonMmdScript);
        babylonMmdScript.onload = resolve;
    });

    BABYLONMMD.SdefInjector.OverrideEngineCreateEffect(engine);

    const havokPlugin = new BABYLON.HavokPlugin();

    scene.enablePhysics(new BABYLON.Vector3(0, -98, 0), havokPlugin);

    // bit = await ste.hunt(ActScr.WRITE_SCREEN, { idx: 'src00' })


    const mmdRuntime = new BABYLONMMD.MmdRuntime(scene, new BABYLONMMD.MmdPhysics(scene));
    mmdRuntime.register(scene);

    cpy.mmdRuntime = mmdRuntime

    const mmdCamera = new BABYLONMMD.MmdCamera("MmdCamera", new BABYLON.Vector3(0, 10, 0), scene);
    mmdCamera.maxZ = 5000;

    const vmdLoader = new BABYLONMMD.VmdLoader(scene);
    const motion = await vmdLoader.loadAsync("motion", "./toon/000/MIKU.vmd")

    cpy.motion = motion;

    mmdRuntime.setCamera(mmdCamera);
    //mmdCamera.addAnimation( motion );
    //mmdCamera.setAnimation("motion");

    var planeOpts = {
        height: 108.4762,
        width: 200.3967,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE
    };
    var ANote0Video = BABYLON.MeshBuilder.CreatePlane("plane", planeOpts, scene);
    var vidPos = (new BABYLON.Vector3(-14, 23, 133))
    ANote0Video.position = vidPos;
    var ANote0VideoMat = new BABYLON.StandardMaterial("m", scene);
    var ANote0VideoVidTex = new BABYLON.VideoTexture("vidtex", "video/000.mp4", scene);
    ANote0VideoMat.diffuseTexture = ANote0VideoVidTex;
    ANote0VideoMat.roughness = 1;
    //ANote0VideoMat.emissiveColor = new BABYLON.Color3.White();
    ANote0Video.material = ANote0VideoMat;

    //bit = await ste.hunt(ActMku.WRITE_MIKU, { idx: 'mku00a', src: 'greasi/00.pmx', dat: { position: { z: -7 } } })
    //bit = await ste.hunt(ActMku.WRITE_MIKU, { idx: 'mku00a', dat: { position: { z: 40, x: -15 } } })

    function resizeCanvasToFixedHeight() {
        const targetAspectRatio = 16 / 9;

        // 1. Set the canvas height to always match the window's inner height.
        const newHeight = window.innerHeight + window.innerHeight * .3;

        // 2. Calculate the required width to maintain the 16:9 aspect ratio.
        const newWidth = newHeight * targetAspectRatio;

        // 3. Apply the new dimensions to the canvas element.
        canvas['width'] = newWidth;
        canvas['height'] = newHeight;

        // 4. Tell the Babylon.js engine to resize its rendering buffers.
        engine.resize();
    }

    window.addEventListener('resize', resizeCanvasToFixedHeight);

    resizeCanvasToFixedHeight();

    bal.slv({ intBit: { idx: "open-babylon" } });
    return cpy;

    //const mmdMesh = await BABYLON.SceneLoader.ImportMeshAsync(undefined, "./greasi/00.pmx", undefined, scene).then((result) => result.meshes[0]);
    //mmdMesh.position = new BABYLON.Vector3( 1, 2, 3);
    //const modelMesh = mmdMesh as BABYLON.Mesh
    //modelMesh.receiveShadows = true;;
    //for(const mesh of modelMesh.metadata.meshes) shadowGenerator.addShadowCaster(mesh);
    //const mmdModel = mmdRuntime.createMmdModel(modelMesh);
    //mmdModel.addAnimation(motion);
    //mmdModel.setAnimation("motion");
    //mmdRuntime.playAnimation();


    // NOTE:: SET CAMERA TARGET AFTER THE TARGET'S CREATION AND NOTE CHANGE FROM BABYLONJS V 2.5
    // targetMesh created here.
    //camera.target = modelMesh; // version 2.4 and earlier
    //camera.lockedTarget = modelMesh; //ver

    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku01b', src:'mickey/00.pmx', dat: { position:{z:-7}} })
    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku01b', dat: { position:{x:-10,z:40}} })

    //for ( var i = 0; i < 100; i++){

    //  bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku' + i, src:'mickey/00.pmx', dat: { position:{z:-7}} })
    //  bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku' + i, dat: { position:{x: i * -1  ,z:40}} })

    //}



    // bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku01', src:'orbie/00.pmx', dat: { position:{z:-7}} })
    // bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku01', dat: { position:{x:-10, z:100}} })

    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku02', src:'orbie/00.pmx', dat: { position:{z:-7}} })
    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku02', dat: { position:{x:-20, z:100}} })


    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku03', src:'orbie/01.pmx', dat: { position:{z:-7}} })
    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku03', dat: { position:{x:-30, z:100}} })


    //setInterval( async ()=>{

    //    value -= 1
    //    bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku00', dat: { position:{z:value}} })


    // }, 111 )

    //const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 1080, height: 720 }, scene);

    // Create a material and texture
    //const material = new BABYLON.StandardMaterial("planeMaterial", scene);
    //const texture = new BABYLON.Texture("img/000.png", scene);
    //material.diffuseTexture = texture;

    // Apply the material to the plane
    //plane.material = material;
    //plane.scaling.x = .05;
    //plane.scaling.y = .05;
    //plane.scaling.z = .05;

    //plane.position.y += 10;
    //plane.position.x -= 1;

    ///PIXI
    //PIXI
    //PIXI

    //const app = new PIXI.Application();
    //await app.init({ background: '#00ff00', resizeTo: window });
    //const stageSize = new BABYLON.Vector2(1280, 720)
    //const out = BABYLON.MeshBuilder.CreateGround('out', { width: 1, height: 1 }, scene)
    //const baseOutScale = stageSize.clone().scale(0.05)
    //out.scaling.set(baseOutScale.x, 1, baseOutScale.y)
    //out.rotation.x = -Math.PI * 0.5
    //const outMat = new BABYLON.StandardMaterial('outMat', scene)
    //out.material = outMat
    //out.isVisible = true
    //out.position.z = 130;
    //out.position.y = 10;
    //out.position.x = -10;
    //const pixiDt = new BABYLON.DynamicTexture('pixi-extract', { width: stageSize.x, height: stageSize.y }, scene, false)
    //const pCtx = pixiDt.getContext()
    //outMat.emissiveTexture = pixiDt
    //outMat.diffuseTexture = pixiDt
    //outMat.opacityTexture = pixiDt
    //pixiDt.hasAlpha = true
    //outMat.disableLighting = true
    //scene.onBeforeRenderObservable.add(() => {
    //    pCtx.clearRect(0, 0, app.canvas.width, app.canvas.height)
    //    pCtx.drawImage(app.canvas, 0, 0)
    //    pixiDt.update()
    //})
    //scene.onAfterRenderObservable.add(() => {
    //    app.renderer.clear()
    //})


    // Render Loop
    //engine.runRenderLoop(function () {

    //  scene.autoClear = false;
    //sphere.rotation.y += 0.01;
    // scene.render();
    //engine.wipeCaches(true);

    //pixiRenderer.reset();
    //pixiRenderer.render(stage1);


    //});


};



