// 🚗 A car is travelling towards a checkpoint.
let carNumber = "KA-01-1234";
let driverName = "Madan";
let itemsInCar = ["Clothes", "Books", "Laptop"];

console.log("🚗 Car arrived at the checkpoint");

// 🛑 Pause here and inspect the variable values.
debugger;

// Use Step Over to execute each statement one by one.
console.log("👮 Inspector starts checking");
console.log("Car Number:", carNumber);
console.log("Driver Name:", driverName);
console.log("Items in the car:", itemsInCar);

let inspectionCompleted = true;
console.log("Inspection Completed:", inspectionCompleted);

let permissionToContinue = "Allowed";
console.log("Permission to Continue:", permissionToContinue);

console.log("🚗 Car continues its journey");

/*
Practice:
1. Open Developer Tools and run the script.
2. Execution pauses at debugger.
3. Inspect carNumber, driverName, and itemsInCar.
4. Click Step Over to execute the highlighted statement.
5. After executing the assignment to inspectionCompleted,
   inspect its value.
6. Continue using Step Over until the script finishes.

Remember:
The highlighted statement is normally the next statement to run.
Step Over executes it without entering a function it calls.
*/