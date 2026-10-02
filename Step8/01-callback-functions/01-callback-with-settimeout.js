// A callback is a function passed to another function.
// The receiving function decides when to call it.

function myName() {
    console.log("My name is Madan!");
}

console.log("Before scheduling the callback");

// Pass myName without parentheses.
// 2000 milliseconds means 2 seconds.
// The callback becomes eligible to run after the delay.
// Its actual execution may happen later.
setTimeout(myName, 2000);

console.log("After scheduling the callback");

/*
Expected output:
Before scheduling the callback
After scheduling the callback
My name is Madan!              // After the delay

setTimeout does not pause the remaining statements.
*/