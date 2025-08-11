export default interface FluxGlopBit {
    idx: string;
    src?: string;
    val?: number;
    dat?: any;
    slv?: Function;
    bit?: any;
    lst?: any[];
    baseModuleYield?: number;
    miningLvl?: number;
    astrogeologyLvl?: number;
    shipBonus?: number;
    crystalBonus?: number;
    fleetBoostBonus?: number;
    implantBonus?: number;
    cycleTime?: number;
    //New Properties for cycle time calculation
    shipHull?: string;
    exhumersLvl?: number;
    hasMiningForemanBurst?: boolean;
    miningForemanCharge?: string;
    boosterSkills?: { miningForeman: number, miningDirector: number };
    boosterShip?: string;
    isRorqualIndustrialCoreActive?: boolean;
    isOverheating?: boolean;
    iceHarvestingLvl?: number;
    miningCrystalType?: string;
    baseCycleTime?: number;
}
