export default interface FormGlopBit {
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
    // New Properties for yield calculation
    miningDroneOperationLvl?: number;
    droneInterfacingLvl?: number;
    shipHull?: string;
    isOrcaIndustrialCoreActive?: boolean;
    isRorqualIndustrialCoreActive?: boolean;
    miningLaserUpgrade?: string; // "I" or "II"
    miningCrystalType?: string; // "Tech I" or "Tech II"
    rigs?: { coreHarvester: string, droneMiningAugmentor: string }; // "I" or "II"
    droneType?: string; // "Mining Drone I", "Mining Drone II", "'Harvester'", "'Excavator'"
    hasMiningForemanBurst?: boolean;
    miningForemanCharge?: string; // "Mining Laser Field Enhancement I" or "Mining Laser Field Enhancement II"
    implants?: { michisExcavationAugmentor: boolean, highwallImplantSet: boolean };
    boosters?: number; // percentage bonus
}
