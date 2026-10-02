// Synchronous calls execute one after another.

function StepOne() {
    console.log("Step One");
}

function StepTwo() {
    console.log("Step Two");
}

function StepThree() {
    console.log("Step Three");
}

// Function calls
StepOne();
StepTwo();
StepThree();

/*
Output:
Step One
Step Two
Step Three
*/