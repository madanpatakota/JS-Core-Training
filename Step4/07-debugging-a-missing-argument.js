// This example intentionally calls a function without an argument.

let foodItemName = "Pizza";

function foodApp(item) {
    console.log("Food Application");
    console.log("Food Item:", item);
}

// Pause before the function call.
debugger;

// Use Step Into to enter foodApp.
// Inspect item: its value is undefined.
foodApp();

// Fix:
// Replace foodApp(); above with:
// foodApp(foodItemName);

// Save and refresh.
// Step into the function again.
// Now item contains "Pizza".