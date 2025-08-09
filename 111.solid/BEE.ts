import Model from "./99.core/interface/model.interface";

import SolidUnit from "./00.solid.unit/solid.unit";
import BabylonUnit from "./01.babylon.unit/babylon.unit";
import CameraUnit from "./02.camera.unit/camera.unit";
import LightUnit from "./03.light.unit/light.unit";
import ScreenUnit from "./08.screen.unit/screen.unit";
import GlopUnit from "./09.glop.unit/glop.unit";
import MikuUnit from "./10.miku.unit/miku.unit";
import MotionUnit from "./11.motion.unit/motion.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Solid from "./00.solid.unit/fce/solid.interface";
import { SolidModel } from "./00.solid.unit/solid.model";
import Babylon from "./01.babylon.unit/fce/babylon.interface";
import { BabylonModel } from "./01.babylon.unit/babylon.model";
import Camera from "./02.camera.unit/fce/camera.interface";
import { CameraModel } from "./02.camera.unit/camera.model";
import Light from "./03.light.unit/fce/light.interface";
import { LightModel } from "./03.light.unit/light.model";
import Screen from "./08.screen.unit/fce/screen.interface";
import { ScreenModel } from "./08.screen.unit/screen.model";
import Glop from "./09.glop.unit/fce/glop.interface";
import { GlopModel } from "./09.glop.unit/glop.model";
import Miku from "./10.miku.unit/fce/miku.interface";
import { MikuModel } from "./10.miku.unit/miku.model";
import Motion from "./11.motion.unit/fce/motion.interface";
import { MotionModel } from "./11.motion.unit/motion.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [SolidUnit,BabylonUnit,CameraUnit,LightUnit,ScreenUnit,GlopUnit,MikuUnit,MotionUnit,CollectUnit,BusUnit];

import * as reduceFromSolid from "./00.solid.unit/solid.reduce";
import * as reduceFromBabylon from "./01.babylon.unit/babylon.reduce";
import * as reduceFromCamera from "./02.camera.unit/camera.reduce";
import * as reduceFromLight from "./03.light.unit/light.reduce";
import * as reduceFromScreen from "./08.screen.unit/screen.reduce";
import * as reduceFromGlop from "./09.glop.unit/glop.reduce";
import * as reduceFromMiku from "./10.miku.unit/miku.reduce";
import * as reduceFromMotion from "./11.motion.unit/motion.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 solid : reduceFromSolid.reducer, 
babylon : reduceFromBabylon.reducer, 
camera : reduceFromCamera.reducer, 
light : reduceFromLight.reducer, 
screen : reduceFromScreen.reducer, 
glop : reduceFromGlop.reducer, 
miku : reduceFromMiku.reducer, 
motion : reduceFromMotion.reducer, 
collect : reduceFromCollect.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 solid : Solid = new SolidModel();
babylon : Babylon = new BabylonModel();
camera : Camera = new CameraModel();
light : Light = new LightModel();
screen : Screen = new ScreenModel();
glop : Glop = new GlopModel();
miku : Miku = new MikuModel();
motion : Motion = new MotionModel();
collect : Collect = new CollectModel();
bus : Bus = new BusModel();

 
}
