// Logical OR: ||
// With Boolean inputs, the result is true when at least one is true.

console.log("true || true:", true || true); // true
console.log("true || false:", true || false); // true
console.log("false || true:", false || true); // true
console.log("false || false:", false || false); // false

// Example: Check whether either employee detail matches.
let employeeID = 1;
let employeeName = "Madan";

console.log(
    "Both match:",
    employeeID === 1 || employeeName === "Madan"
); // true

console.log(
    "Only ID matches:",
    employeeID === 1 || employeeName === "xyz"
); // true

console.log(
    "Only name matches:",
    employeeID === 2 || employeeName === "Madan"
); // true

console.log(
    "Neither matches:",
    employeeID === 2 || employeeName === "xyz"
); // false

if (employeeID === 2 || employeeName === "xyz") {
    console.log("At least one employee detail matches");
} else {
    console.log("Neither employee detail matches");
}

// Output from the if statement:
// Neither employee detail matches

// && requires both conditions to be true.
// || requires at least one condition to be true.