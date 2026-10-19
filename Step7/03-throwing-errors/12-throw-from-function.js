// throw can also be used inside a function.
// The caller can catch the error.

function getBankNameInUpperCase(bankName) {
    if (typeof bankName !== "string") {
        throw new Error("Bank name must be a string.");
    }

    if (bankName.trim() === "") {
        throw new Error("Please provide a bank name.");
    }

    return bankName.trim().toUpperCase();
}

// Example 1: Valid input
try {
    let bankName = getBankNameInUpperCase("hdfc bank");
    console.log("Bank Name:", bankName); // HDFC BANK
} catch (error) {
    console.log("Error Message:", error.message);
}

// Example 2: Invalid input
try {
    let bankName = getBankNameInUpperCase("");
    console.log("Bank Name:", bankName); // Skipped
} catch (error) {
    console.log("Error Message:", error.message);
}

console.log("Both examples completed");