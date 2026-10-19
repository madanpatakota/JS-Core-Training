// When try completes without an exception, catch is skipped.
// finally still runs.

try {
    let bankName = "hdfc bank";

    // Updating a let variable is allowed.
    bankName = bankName.toUpperCase();

    console.log("Welcome to", bankName); // HDFC BANK
} catch (error) {
    // This block does not run in this example.
    console.log("Error Message:", error.message);
} finally {
    console.log("Bank name check completed");
}

let transactions = ["CreditCard", "DebitCard", "Savings"];
console.log("Number of Transactions:", transactions.length); // 3