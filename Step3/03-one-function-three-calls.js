// Define the coffee-making steps once
function makeCoffee() {
    console.log("Step 1: Boil the water");
    console.log("Step 2: Add coffee powder");
    console.log("Step 3: Add milk and sugar");
    console.log("Step 4: Serve the coffee");
}

// Shop 1 uses the function
console.log("%cShop 1", "color: white; background-color: purple;");
makeCoffee();

// Shop 2 uses the same function
console.log("%cShop 2", "color: white; background-color: orange;");
makeCoffee();

// Shop 3 uses the same function
console.log("%cShop 3", "color: white; background-color: green;");
makeCoffee();

// One function definition, three calls.
// Each call runs the same coffee-making steps.