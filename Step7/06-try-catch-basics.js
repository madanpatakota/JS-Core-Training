// try: contains code that may throw an exception.
// catch: handles an exception thrown during execution of the try block.

console.log("Before the try block");

try {
    const bankName = "hdfc bank";

    // Intentional TypeError: const cannot be reassigned.
    bankName = bankName.toUpperCase();

    // Skipped because the previous statement throws.
    console.log("Welcome to", bankName);
} catch (error) {
    console.log("The error was handled");
    console.log("Error Name:", error.name); // TypeError
    console.log("Error Message:", error.message);
}

// Execution continues because catch handled the exception.
let transactions = ["CreditCard", "DebitCard", "Savings"];
console.log("Number of Transactions:", transactions.length); // 3

console.log("After the try...catch statement");