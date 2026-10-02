// Logical AND: &&
// With Boolean inputs, the result is true only when both are true.

console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false
console.log("false && false:", false && false); // false

// Example: Both employee details must match.
let employeeID = 1;
let employeeName = "Madan";

console.log(
    "Both match:",
    employeeID === 1 && employeeName === "Madan"
); // true

console.log(
    "Only ID matches:",
    employeeID === 1 && employeeName === "xyz"
); // false

console.log(
    "Only name matches:",
    employeeID === 2 && employeeName === "Madan"
); // false

console.log(
    "Neither matches:",
    employeeID === 2 && employeeName === "xyz"
); // false

if (employeeID === 1 && employeeName === "Madan") {
    console.log("Both employee ID and name match");
} else {
    console.log("Employee details do not both match");
}

// Output from the if statement:
// Both employee ID and name match