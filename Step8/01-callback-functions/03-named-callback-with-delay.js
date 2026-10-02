// Pass a named function to our own function.
// Our function schedules that callback using setTimeout.

function myName() {
    console.log("My name is Madan!");
}

function setMyName(callbackFn) {
    console.log("Scheduling the callback");

    setTimeout(callbackFn, 3000);
}

setMyName(myName);

console.log("The remaining code continues");

/*
Expected output:
Scheduling the callback
The remaining code continues
My name is Madan!              // After the delay
*/