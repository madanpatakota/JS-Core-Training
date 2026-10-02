// Multiple debugger statements act like multiple checkpoints.

let foodItemName = "Pizza";
console.log("Food Item:", foodItemName);

// Checkpoint 1
debugger;

let deliveryLocation = "Delhi";
console.log("Delivery Location:", deliveryLocation);

// Checkpoint 2
debugger;

let estimatedTime = "20 Minutes";
console.log("Estimated Delivery Time:", estimatedTime);

// Checkpoint 3
debugger;

let isDeliveryAvailable = true;
console.log("Delivery Available:", isDeliveryAvailable);

console.log("Order details completed.");

// Practice:
// Use Resume to continue until the next checkpoint.
// At each checkpoint, inspect the variables already assigned.

// To practice clicking line numbers in Sources:
// Comment out the debugger statements,
// then click a statement's line number to add a breakpoint.