import {
    ReactionRule,
    ReactionRulebook,
    ChemicalContainer,
    Ship,
    mainGameLoop,
    findValidReaction
} from './core';

// Mock data for testing
const setupTest = () => {
    // Clear the rulebook before each test
    ReactionRulebook.length = 0;

    // Create a sample reaction rule
    const thermalShockRule: ReactionRule = {
        name: "Thermal Shock",
        required_signals: { "HEAT": 4000 },
        required_reagents: { "CRYO": 1 },
        consumed_reagents: { "CRYO": 1 },
        produced_signals: { "STRUCTURAL_STRESS": "+50" },
        produced_reagents: { "FRACTURE_EVENT": 1 },
        priority: 10
    };
    ReactionRulebook.push(thermalShockRule);

    // Create a ship and containers
    const ship = new Ship("TestShip");
    const container = new ChemicalContainer("MainReactor", ship);
    const neighbor = new ChemicalContainer("NeighborReactor", ship);
    container.adjacent_containers.push(neighbor);

    ship.all_containers["MainReactor"] = container;
    ship.all_containers["NeighborReactor"] = neighbor;

    return { ship, container, neighbor, thermalShockRule };
};

const runTests = () => {
    console.log("Running Kernel Tests...");

    // Test 1: findValidReaction should return null when conditions are not met
    let { container } = setupTest();
    let validReaction = findValidReaction(container, ReactionRulebook);
    if (validReaction === null) {
        console.log("Test 1 Passed: No reaction triggered when conditions are not met.");
    } else {
        console.error("Test 1 Failed: A reaction was triggered incorrectly.", validReaction);
    }

    // Test 2: findValidReaction should return the correct reaction when conditions are met
    ({ container } = setupTest());
    container.setSignal("HEAT", 5000);
    container.addReagent("CRYO", 1.5);
    validReaction = findValidReaction(container, ReactionRulebook);
    if (validReaction && validReaction.name === "Thermal Shock") {
        console.log("Test 2 Passed: Correct reaction found when conditions are met.");
    } else {
        console.error("Test 2 Failed: Did not find the correct reaction.", validReaction);
    }

    // Test 3: mainGameLoop should process a reaction correctly, including propagation
    let { ship, container: mainContainer, neighbor } = setupTest();
    mainContainer.setSignal("HEAT", 5000);
    mainContainer.addReagent("CRYO", 1.5);

    mainGameLoop([ship]);

    const stress = mainContainer.signals["STRUCTURAL_STRESS"];
    const cryo = mainContainer.reagents["CRYO"];
    const fractureInSource = mainContainer.reagents["FRACTURE_EVENT"];
    const fractureInNeighbor = neighbor.reagents["FRACTURE_EVENT"];

    if (stress === 50 && cryo === 0.5 && fractureInNeighbor === 1 && fractureInSource === undefined) {
        console.log("Test 3 Passed: mainGameLoop processed the reaction and propagation correctly.");
    } else {
        console.error(`Test 3 Failed: State after reaction is incorrect.
            Expected: { stress: 50, cryo: 0.5, fractureInNeighbor: 1, fractureInSource: undefined }
            Got: { stress: ${stress}, cryo: ${cryo}, fractureInNeighbor: ${fractureInNeighbor}, fractureInSource: ${fractureInSource} }`);
    }

    console.log("Kernel Tests Finished.");
};

// Execute the tests
runTests();
