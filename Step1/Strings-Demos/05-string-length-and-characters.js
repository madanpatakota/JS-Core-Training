var employeeName = "Robert Plant";

// length is a property: Do not add parentheses
// It counts spaces as well
var totalLength = employeeName.length;
console.log("String Length:", totalLength); // 12

// String indexes start at 0
// R is at index 0, o is at index 1, b is at index 2

// charAt() is a method: Use parentheses
var firstCharacter = employeeName.charAt(0);
console.log("First Character:", firstCharacter); // R

var secondCharacter = employeeName.charAt(1);
console.log("Second Character:", secondCharacter); // o

// Bracket notation also accesses a character
console.log("Character at Index 0:", employeeName[0]); // R
console.log("Character at Index 9:", employeeName[9]); // a

// To get the third character, use index 2
console.log("Third Character:", employeeName.charAt(2)); // b

// A fixed index works only when the character is at that position
console.log("Character at Index 11:", employeeName.charAt(11)); // t

// length - 1 gives the last index
var lastCharacter = employeeName.charAt(employeeName.length - 1);
console.log("Last Character:", lastCharacter); // t

// The same approach works with a different name
var customerName = "Steve Jobs";
console.log(
    "Customer's Last Character:",
    customerName.charAt(customerName.length - 1)
); // s

// When the index is outside the string:
console.log("Using charAt:", employeeName.charAt(100)); // ""
console.log("Using brackets:", employeeName[100]); // undefined