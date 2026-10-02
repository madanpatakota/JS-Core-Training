var employeeName = "Robert Plant";

// toUpperCase() returns a string with uppercase letters
var uppercaseName = employeeName.toUpperCase();
console.log("Uppercase Name:", uppercaseName); // ROBERT PLANT

// toLowerCase() returns a string with lowercase letters
var lowercaseName = employeeName.toLowerCase();
console.log("Lowercase Name:", lowercaseName); // robert plant

// These methods do not change the original string
console.log("Original Name:", employeeName); // Robert Plant

// Assign the returned string to update the variable
employeeName = employeeName.toUpperCase();
console.log("Updated Name:", employeeName); // ROBERT PLANT

// Property: employeeName.length
// Method without arguments: employeeName.toUpperCase()
// Method with an argument: employeeName.charAt(0)
// Bracket notation: employeeName[0]