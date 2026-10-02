// A callback can run immediately during the receiving function's call.
// Callbacks are not always asynchronous.

function myName() {
    console.log("My name is Madan!");
}

function setMyName(callbackFn) {
    console.log("Inside setMyName: Before the callback");

    callbackFn(); // Execute the function received as an argument.

    console.log("Inside setMyName: After the callback");
}

// Pass the function itself, without calling it here.
setMyName(myName);

/*
Expected output:
Inside setMyName: Before the callback
My name is Madan!
Inside setMyName: After the callback
*/