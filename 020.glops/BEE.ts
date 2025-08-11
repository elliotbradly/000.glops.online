import Model from "./99.core/interface/model.interface";

import GlopsUnit from "./00.glops.unit/glops.unit";
import FormGlopUnit from "./04.formGlop.unit/formGlop.unit";
import FluxGlopUnit from "./05.fluxGlop.unit/fluxGlop.unit";
import RatchetwrkUnit from "./06.ratchetwrk.unit/ratchetwrk.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Glops from "./00.glops.unit/fce/glops.interface";
import { GlopsModel } from "./00.glops.unit/glops.model";
import FormGlop from "./04.formGlop.unit/fce/formGlop.interface";
import { FormGlopModel } from "./04.formGlop.unit/formGlop.model";
import FluxGlop from "./05.fluxGlop.unit/fce/fluxGlop.interface";
import { FluxGlopModel } from "./05.fluxGlop.unit/fluxGlop.model";
import Ratchetwrk from "./06.ratchetwrk.unit/fce/ratchetwrk.interface";
import { RatchetwrkModel } from "./06.ratchetwrk.unit/ratchetwrk.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [GlopsUnit,FormGlopUnit,FluxGlopUnit,RatchetwrkUnit,CollectUnit,BusUnit];

import * as reduceFromGlops from "./00.glops.unit/glops.reduce";
import * as reduceFromFormGlop from "./04.formGlop.unit/formGlop.reduce";
import * as reduceFromFluxGlop from "./05.fluxGlop.unit/fluxGlop.reduce";
import * as reduceFromRatchetwrk from "./06.ratchetwrk.unit/ratchetwrk.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 glops : reduceFromGlops.reducer, 
formGlop : reduceFromFormGlop.reducer, 
fluxGlop : reduceFromFluxGlop.reducer, 
ratchetwrk : reduceFromRatchetwrk.reducer, 
collect : reduceFromCollect.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 glops : Glops = new GlopsModel();
formGlop : FormGlop = new FormGlopModel();
fluxGlop : FluxGlop = new FluxGlopModel();
ratchetwrk : Ratchetwrk = new RatchetwrkModel();
collect : Collect = new CollectModel();
bus : Bus = new BusModel();

 
}
