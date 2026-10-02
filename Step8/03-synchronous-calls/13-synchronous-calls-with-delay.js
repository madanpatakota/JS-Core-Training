// This function blocks execution for the given milliseconds.
// Use it only to demonstrate synchronous blocking.

function sleep(milliseconds) {
    let startDateTime = new Date().getTime();
    let endDateTime = startDateTime + milliseconds;

    while (new Date().getTime() < endDateTime) {
        // Keep waiting until the specified time has passed.
    }
}

function StepOne() {
    sleep(5000); // Wait for 5 seconds
    console.log("Step One");
}

function StepTwo() {
    sleep(3000); // Wait for 3 seconds
    console.log("Step Two");
}

function StepThree() {
    sleep(8000); // Wait for 8 seconds
    console.log("Step Three");
}

// StepTwo starts only after StepOne finishes.
// StepThree starts only after StepTwo finishes.
StepOne();
StepTwo();
StepThree();

/*
Output order:
Step One
Step Two
Step Three

Total blocking time: approximately 16 seconds.
*/