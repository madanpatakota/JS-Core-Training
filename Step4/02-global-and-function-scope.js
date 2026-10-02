/*
Example based on the slide:
Wi-Fi represents a shared global variable.
Each room's fan speed represents a local variable.
*/

// Global variable: both functions can access it.
var signalName = "Wi-Fi";

// Function 1
function roomOne() {
    // Local variable: accessible only inside roomOne.
    let roomOneFanSpeed = "Fast";

    console.log("Room 1 - Shared Signal:", signalName);
    console.log("Room 1 - Fan Speed:", roomOneFanSpeed);

    // Cannot access the local variable from roomTwo.
    // console.log(roomTwoFanSpeed); // ReferenceError
}

// Function 2
function roomTwo() {
    // Local variable: accessible only inside roomTwo.
    let roomTwoFanSpeed = "Slow";

    console.log("Room 2 - Shared Signal:", signalName);
    console.log("Room 2 - Fan Speed:", roomTwoFanSpeed);

    // Cannot access the local variable from roomOne.
    // console.log(roomOneFanSpeed); // ReferenceError
}

// Calling the functions
roomOne();
roomTwo();

console.log("Outside Both Functions - Signal:", signalName);

// Local variables are not accessible outside their functions.
// Uncomment ONE line at a time to demonstrate the error.

// console.log(roomOneFanSpeed); // ReferenceError
// console.log(roomTwoFanSpeed); // ReferenceError