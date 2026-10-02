// A callback is a function passed as an argument to another function.
// The receiving function can call it.

// callbackFunction receives the function passed below.
function sayHello(callbackFunction) {
    console.log("Inside the sayHello function");

    // Call the callback and pass two values.
    callbackFunction(10, 20);
}

// Pass an anonymous function as an argument.
sayHello(function (firstNumber, secondNumber) {
    console.log("Hello, world!");
    console.log("First Number:", firstNumber);   // 10
    console.log("Second Number:", secondNumber); // 20
    console.log("Total:", firstNumber + secondNumber); // 30
});

// In this example, the callback runs immediately inside sayHello.
// A callback does not always run later.