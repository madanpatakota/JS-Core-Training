// A logical error means the code runs but produces an incorrect result.
// JavaScript may not throw an exception for a logical error.

let productPrice = 1500;
let quantity = 2;

// Incorrect calculation: addition instead of multiplication.
let incorrectTotal = productPrice + quantity;
console.log("Incorrect Total:", incorrectTotal); // 1502

// Correct calculation.
let correctTotal = productPrice * quantity;
console.log("Correct Total:", correctTotal); // 3000

// try...catch does not automatically detect incorrect calculations.
// Check the result against the expected result.