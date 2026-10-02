// setTimeout schedules a callback without blocking the next statement.

setTimeout(() => {
    var stepOne = "Step One";
    console.log(`${stepOne} completed after 8 seconds`);
}, 8000);

setTimeout(() => {
    var stepTwo = "Step Two";
    console.log(`${stepTwo} completed after 3 seconds`);
}, 3000);

setTimeout(() => {
    var stepThree = "Step Three";
    console.log(`${stepThree} completed after 6 seconds`);
}, 6000);

/*
Expected output order:
Step Two completed after 3 seconds
Step Three completed after 6 seconds
Step One completed after 8 seconds

The delays are minimum waiting times, not exact guarantees.
*/