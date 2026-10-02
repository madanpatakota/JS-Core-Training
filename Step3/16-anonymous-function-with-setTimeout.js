// setTimeout schedules a function to run after a delay.
// The delay is given in milliseconds.
// 3000 milliseconds = 3 seconds.

console.log("Before setTimeout");

// Pass an anonymous function as the callback.
setTimeout(function () {
    console.log("Test");
    console.log("This message appears after approximately 3 seconds.");
}, 3000);

// JavaScript continues without waiting for the timer.
console.log("After setTimeout");

/*
Expected output order:
Before setTimeout
After setTimeout
Test
This message appears after approximately 3 seconds.
*/