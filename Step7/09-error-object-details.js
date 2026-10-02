// catch receives the thrown value.
// For an Error object, we can inspect name, message and stack.

try {
    let userName;
    console.log(userName.toUpperCase());
} catch (error) {
    console.log("Complete Error Object:", error);

    // The type or category of the error.
    console.log("Error Name:", error.name); // TypeError

    // A description of the problem.
    console.log("Error Message:", error.message);

    // Diagnostic details, usually including source locations.
    console.log("Error Stack:", error.stack);
}

console.log("Error inspection completed");

// Exact error messages and stack formatting can vary by browser.