// 🚗 Details the inspector will check
let carNumber = "KA-01-1234";
let itemsInCar = ["Clothes", "Books", "Laptop"];

function inspectCar(number, items) {
    console.log("🚗 Car stopped at the checkpoint");
    console.log("Car Number:", number);

    // Step Into here to enter checkItems.
    checkItems(items);

    console.log("✅ Inspection completed");
    console.log("🚗 Car can continue its journey");
}

function checkItems(items) {
    console.log("👮 Inspector is checking the items");
    console.log("Items in the car:", items);

    // Inspect the Call Stack while paused here:
    // checkItems
    // inspectCar
    // Global script (the label may vary)

    console.log("✅ Items checked");
}

// 🛑 Checkpoint: pause execution
debugger;

inspectCar(carNumber, itemsInCar);

console.log("🏁 Car reached its destination");

/*
Practice:
1. Run the script with Developer Tools open.
2. Execution pauses at debugger.
3. Use Step Over to reach inspectCar(...).
4. Use Step Into to enter inspectCar.
5. Use Step Over to execute statements one by one.
6. At checkItems(items), use Step Into.
7. Inspect the items variable and the Call Stack.
8. Use Step Out to finish checkItems and return to inspectCar.
9. Use Step Out again to finish inspectCar.
10. Use Resume to run the remaining code.
*/