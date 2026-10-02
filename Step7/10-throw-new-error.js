// new Error(message) creates an Error object.
// throw stops the current flow and sends the error to a matching catch.

try {
    console.log("Starting the bank service check");

    // Simulated error for this demonstration.
    throw new Error(
        "Bank service is unavailable. Please try again in a few minutes."
    );

    // This statement is skipped after throw.
    console.log("Bank service is ready");
} catch (error) {
    console.log("Error Name:", error.name); // Error
    console.log("Error Message:", error.message);
} finally {
    console.log("Bank service check completed");
}

console.log("Continuing with the next task");

// This example does not contact or check an actual server.