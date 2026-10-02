// == allows type conversion when comparing different types.
// === compares without converting types.

let employeeID = 1;
let employeeIDText = "1";

console.log("Number:", employeeID);
console.log("String:", employeeIDText);

console.log("Number Type:", typeof employeeID); // number
console.log("String Type:", typeof employeeIDText); // string

// Loose equality
console.log("Using ==:", employeeID == employeeIDText); // true

// Strict equality
console.log("Using ===:", employeeID === employeeIDText); // false

console.log("1 === 1:", 1 === 1); // true
console.log('1 === "1":', 1 === "1"); // false
console.log('10 === "10":', 10 === "10"); // false

// Loose inequality
console.log('1 != "1":', 1 != "1"); // false

// Strict inequality
console.log('1 !== "1":', 1 !== "1"); // true

// Type conversion during subtraction
console.log('1 - "1":', 1 - "1"); // 0

// Here, subtraction converts the string "1" to a number.

// Prefer === and !== for predictable comparisons.