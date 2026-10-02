// debugger pauses execution when Developer Tools is open.
// Use Step Over to execute one statement at a time.

let foodItemName = "Pizza";
console.log("Food Item:", foodItemName);

// Check foodItemName while paused here.
debugger;

// This declaration has not executed at the pause above.
let deliveryLocation = "Delhi";
console.log("Delivery Location:", deliveryLocation);

let estimatedTime = "20 Minutes";
console.log("Estimated Delivery Time:", estimatedTime);

let isDeliveryAvailable = true;
console.log("Delivery Available:", isDeliveryAvailable);

// Practice:
// 1. Refresh the page with Developer Tools open.
// 2. Execution pauses at debugger.
// 3. Inspect foodItemName in the Scope panel.
// 4. Use Step Over to execute the following statements.
// 5. Watch the variable values appear as declarations execute.