// A runtime error occurs while code is executing.
// Reassigning a const variable causes a TypeError.

console.log("Before the error");

const bankName = "HDFC Bank";
bankName = "SBI Bank"; // Intentional TypeError

// These statements are not reached because the error is unhandled.
console.log("Bank Name:", bankName);
console.log("After the error");