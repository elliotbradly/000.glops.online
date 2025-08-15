import State from "../99.core/state";
import { Ship } from "./reaction.model";
import { mainGameLoop } from "./reaction.buzzer";
import { reactionRulebook } from "./fce/reaction.interface";

export default class ReactionUnit {

 constructor(state: State) {
 }

 test_reaction() {
    // --- DEMONSTRATION ---

    // 1. Create a ship
    const dreadnought = new Ship("Dreadnought");

    // 2. Add components (Chemical Containers)
    const mainReactor = dreadnought.addContainer("MainReactor");
    const coolantConduit = dreadnought.addContainer("CoolantConduit");
    const portArmor = dreadnought.addContainer("PortArmor_Section3");

    // 3. Define adjacencies
    mainReactor.adjacent_containers.push(coolantConduit);
    coolantConduit.adjacent_containers.push(mainReactor, portArmor);
    portArmor.adjacent_containers.push(coolantConduit);

    // 4. Set initial chemical states
    mainReactor.setSignal("HEAT", 5000);
    mainReactor.setSignal("STRUCTURAL_STRESS", 20);
    coolantConduit.setSignal("HEAT", 100);

    // 5. Player Action: Fire a Cryo Torpedo
    console.log("--- Player Action ---");
    console.log("EVENT: Reagent [CRYO] injected into Dreadnought:CoolantConduit.");
    coolantConduit.addReagent("CRYO", 1.0);


    // 6. Run the main game loop for one tick
    console.log("\n--- Reaction Processing Phase ---");
    mainGameLoop([dreadnought], reactionRulebook);


    // 7. Display the final state of the ship
    console.log("\n--- Final Ship State ---");
    for (const containerId in dreadnought.all_containers) {
        const container = dreadnought.all_containers[containerId];
        console.log(`Container: ${container.id}`);
        console.log("  Signals:", container.signals);
        console.log("  Reagents:", container.reagents);
    }
 }
}
