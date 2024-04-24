// The way of declare the function

//General function
function func_a() {
  return "Hello world";
}
var returnfunc_a = func_a();

//variable function . Here we are assign the anonomous function signature to the variable  . so we can say variable function.
var func_b = function () {
  return "Hello world";
};
var returnfunc_b = func_b();

//Arrow function
var func_c = () => {
  return "Hello world";
};
var returnfunc_c = func_c();

console.log("Func a return ", returnfunc_a);
console.log("Func b return ", returnfunc_b);
console.log("Func c return ", returnfunc_c);

setTimeout(function () {
  console.log("Executing"); // inside in settime will execute the code after the 2 seconds.....
}, 2000);

// Define a function that takes two numbers and a callback function


//A callback function, in programming, is a function that is passed as an argument to another function and is executed after some specific event occurs. 

function performOperation(x, y, callback) {
  var result = callback(x, y);
  console.log("Result of operation:", result);
}

// Define callback functions for addition and subtraction
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

// Use the performOperation function with callback functions
performOperation(5, 3, add); // Output: Result of operation: 8
performOperation(10, 7, subtract); // Output: Result of operation: 3
