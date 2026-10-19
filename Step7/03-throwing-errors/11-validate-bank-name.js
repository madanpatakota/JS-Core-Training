// Validate the value before calling a string method.
// A missing bank name does not prove that a server is down.

try {
    let bankName = "hdfc bank";

    // Check that the value is a string before using trim().
    if (typeof bankName !== "string") {
        throw new Error("Bank name must be a string.");
    }

    // trim() removes spaces from the beginning and end.
    if (bankName.trim() === "") {
        throw new Error("Bank name cannot be empty.");
    }

    bankName = bankName.trim().toUpperCase();
    console.log("Welcome to", bankName); // HDFC BANK
} catch (error) {
    console.log("Validation Error:", error.message);
} finally {
    console.log("Bank name validation completed");
}

let transactions = ["CreditCard", "DebitCard", "Savings"];
console.log("Number of Transactions:", transactions.length);

// Try changing bankName to undefined, 123 or "   ".
// Each invalid value produces a meaningful validation message.