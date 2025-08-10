import Glops from "./fce/glops.interface";
import glopsBit from "./fce/glops.interface";

export class GlopsModel implements Glops {
   opened: number = 0

   dex: number = 0;
   //idx:string;
   //glopsBitList: glopsBit[] = [];
   //glopsBits: any = {};
   idxClk: string
   idxInc: string

   access: number = 0

   maxLong: number = 1000;

   lastUpdateTimeShort: number = 0;
   deltaHoldShort: number = 0;
   maxShort: number = 100;

   shortValue: number = 0;

   tinyCount:number = 0;
   tinyMax:number = 20;

   maxTiny: number = 50;

   lastUpdateTimeLong: number = 0;
   deltaHoldLong: number = 0;


   delayUntil: number = 0;
}
