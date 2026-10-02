// Shared function used by all three shops
function makeCoffee() {
    console.log("Boil the water");
    console.log("Add coffee powder");
    console.log("Add milk and sugar");
    console.log("%cCoffee is ready!", "color: white; background-color: red;");
}

// Shop 1 has its own tasks and calls the shared function
function shopOne() {
    console.log("%cShop 1: Take the order", "background-color: purple; color: white;");
    console.log("Prepare the cup");
    makeCoffee();
}

// Shop 2 also calls the same shared function
function shopTwo() {
    console.log("%cShop 2: Take the order", "background-color: orange; color: black;");
    console.log("Prepare the cup");
    makeCoffee();
}

// Shop 3 also calls the same shared function
function shopThree() {
    console.log("%cShop 3: Take the order", "background-color: green; color: white;");
    console.log("Prepare the cup");
    makeCoffee();
}

// Call the shop functions
shopOne();
shopTwo();
shopThree();

// Each shop function calls makeCoffee().
// We reuse the coffee-making code instead of writing it in every shop.