// Use a comparison to create a true or false condition.

let bankName = "SBI";

if (bankName === "HDFC") {
    console.log("Selected Bank: HDFC Bank");
} else if (bankName === "SBI") {
    console.log("Selected Bank: SBI Bank");
} else {
    console.log("No matching bank found");
}

// Output:
// Selected Bank: SBI Bank

// Try bankName = "HDFC".
// Try bankName = "Axis".

// String comparisons are case-sensitive.
// "sbi" does not match "SBI".