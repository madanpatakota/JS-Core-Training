// A declared variable without an assigned value contains undefined.

let userName;
console.log("User Name:", userName); // undefined

// undefined does not have a toUpperCase() method.
let userNameInUpperCase = userName.toUpperCase(); // TypeError

// This statement is not reached.
console.log("Uppercase Name:", userNameInUpperCase);

// Correction: assign a string before using its string methods.
// let userName = "John";
// console.log(userName.toUpperCase()); // JOHN