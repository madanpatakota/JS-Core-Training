// finally runs after try and catch, whether an exception occurs or not.
// Use it for cleanup or actions needed after the attempt.

try {
    let bankName;

    // Intentional TypeError: bankName contains undefined.
    bankName = bankName.toUpperCase();

    console.log("Welcome to", bankName); // Skipped
} catch (error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
} finally {
    console.log("Bank name check completed");
}

let transactions = ["CreditCard", "DebitCard", "Savings"];
console.log("Number of Transactions:", transactions.length); // 3