// A ReferenceError occurs when we access a variable
// that is not declared or is not available in the current scope.

console.log("Before checking transactions");

// The declared variable is named transactions.
let transactions = ["CreditCard", "DebitCard", "Savings"];

// transactions4 is not declared.
console.log("Number of Transactions:", transactions4.length);

// This statement is not reached.
console.log("Transaction check completed");

// Correction:
// console.log("Number of Transactions:", transactions.length); // 3