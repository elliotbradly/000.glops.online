import * as ActFgp from "../formGlop.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import { FormGlopModel } from "../formGlop.model";
import FormGlopBit from "../fce/formGlop.bit";

import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;

export const initFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-formGlop" } });

    return cpy;
};


export const updateFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    // --- Get all parameters from bal object, with defaults ---
    const baseModuleYield = bal.baseModuleYield || 0;
    const cycleTime = bal.cycleTime || 1; // Keep cycleTime logic simple for now

    // Skills
    const miningLvl = bal.miningLvl || 0;
    const astrogeologyLvl = bal.astrogeologyLvl || 0;
    const miningDroneOperationLvl = bal.miningDroneOperationLvl || 0;
    const droneInterfacingLvl = bal.droneInterfacingLvl || 0;

    // Ship
    const shipHull = bal.shipHull || "";
    const isOrcaIndustrialCoreActive = bal.isOrcaIndustrialCoreActive || false;
    const isRorqualIndustrialCoreActive = bal.isRorqualIndustrialCoreActive || false;

    // Modules & Rigs
    const miningLaserUpgrade = bal.miningLaserUpgrade || "";
    const miningCrystalType = bal.miningCrystalType || "";
    const rigs = bal.rigs || { coreHarvester: "", droneMiningAugmentor: "" };
    const droneType = bal.droneType || "";

    // Fleet & Implants/Boosters
    const hasMiningForemanBurst = bal.hasMiningForemanBurst || false;
    const implants = bal.implants || { michisExcavationAugmentor: false, highwallImplantSet: false };
    const boosters = bal.boosters || 0;

    // --- Calculate Yield Modifier ---
    let yieldModifier = 1.0;

    // 1. Character Skills
    let skillBonus = 1.0;
    if (droneType) { // Drone yield calculation
        skillBonus *= (1 + miningDroneOperationLvl * 0.05);
        skillBonus *= (1 + droneInterfacingLvl * 0.10);
    } else { // Laser/Strip miner yield calculation
        skillBonus *= (1 + miningLvl * 0.05);
        skillBonus *= (1 + astrogeologyLvl * 0.05);
    }
    yieldModifier *= skillBonus;

    // 2. Ship Hulls
    let shipBonus = 1.0;
    switch (shipHull) {
        // Laser/Strip bonuses
        case "Venture": shipBonus *= 2.0; break; // +100%
        case "Covetor": shipBonus *= 2.0; break; // +100%
        case "Hulk": shipBonus *= 2.5; break; // +150%
        // Drone bonuses
        case "Procurer": if (droneType) shipBonus *= 1.5; break; // +50%
        case "Skiff": if (droneType) shipBonus *= 2.0; break; // +100%
        case "Porpoise": if (droneType) shipBonus *= 1.5; break; // +50%
        case "Orca":
            if (droneType) {
                shipBonus *= isOrcaIndustrialCoreActive ? 3.5 : 2.5; // +250% or +150%
            }
            break;
        case "Rorqual":
            if (droneType) {
                // Assuming +200% bonus for industrial core on top of base +300%
                shipBonus *= isRorqualIndustrialCoreActive ? 6.0 : 4.0; // +500% or +300%
            }
            break;
    }
    yieldModifier *= shipBonus;

    // 3. Ship Modules (Lasers/Strips only)
    if (!droneType) {
        if (miningLaserUpgrade === "I") yieldModifier *= 1.055;
        if (miningLaserUpgrade === "II") yieldModifier *= 1.11;
    }

    // 4. Mining Crystals (Lasers/Strips only)
    if (!droneType) {
        if (miningCrystalType === "Tech I") yieldModifier *= 1.60;
        if (miningCrystalType === "Tech II") yieldModifier *= 1.75;
    }

    // 5. Rigs
    // Assuming 10% for Tech I and 15% for Tech II, as no values were provided.
    let rigBonus = 1.0;
    if (droneType && rigs.droneMiningAugmentor) {
        if (rigs.droneMiningAugmentor === "I") rigBonus *= 1.10;
        if (rigs.droneMiningAugmentor === "II") rigBonus *= 1.15;
    }
    if (!droneType && rigs.coreHarvester) {
        if (rigs.coreHarvester === "I") rigBonus *= 1.10;
        if (rigs.coreHarvester === "II") rigBonus *= 1.15;
    }
    yieldModifier *= rigBonus;

    // 6. Drones - base yield is handled by baseModuleYield

    // 7. Fleet Support (Command Bursts)
    // Assuming a generic 10% bonus as no formula was provided.
    if (hasMiningForemanBurst) {
        yieldModifier *= 1.10;
    }

    // 8. Implants & Boosters
    let implantBonus = 1.0;
    if (implants.michisExcavationAugmentor) implantBonus *= 1.05;
    // Assuming max bonus for Highwall set
    if (implants.highwallImplantSet) implantBonus *= 1.10;
    yieldModifier *= implantBonus;

    yieldModifier *= (1 + boosters / 100);


    // --- Final Calculation ---
    const finalYieldPerCycle = baseModuleYield * yieldModifier;
    const yieldPerSecond = finalYieldPerCycle / cycleTime;

    bal.dat = {
        yield: yieldPerSecond,
        yieldPerCycle: finalYieldPerCycle,
        cycleTime: cycleTime
    };

    if (bal.slv != null) bal.slv({ fgpBit: { idx: "update-formGlop", dat: bal.dat } });

    return cpy;
};


export const readFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'fgp00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActFgp.CREATE_FORMGLOP })

    bal.slv({ fgpBit: { idx: "read-formGlop", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFgp.CREATE_FORMGLOP })

    if (bal.slv != null) bal.slv({ fgpBit: { idx: "write-formGlop", dat: bit.clcBit.dat } });
    return cpy;
};



export const removeFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {
    debugger
    return cpy;
};


export const deleteFormGlop = async (cpy: FormGlopModel, bal: FormGlopBit, ste: State) => {
    debugger
    return cpy;
};




