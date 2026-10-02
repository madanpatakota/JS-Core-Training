// Top-level code runs in the global execution context.
console.log("1. Global execution starts");

var signalName = "Wi-Fi";

function showRoomDetails() {
    // Calling this function creates a function execution context.
    console.log("3. Function execution starts");

    let fanSpeed = "Fast";

    console.log("4. Shared Signal:", signalName);
    console.log("5. Local Fan Speed:", fanSpeed);

    console.log("6. Function execution ends");
}

console.log("2. Before the function call");

showRoomDetails();

// After the function finishes, execution continues here.
console.log("7. Back in global execution");