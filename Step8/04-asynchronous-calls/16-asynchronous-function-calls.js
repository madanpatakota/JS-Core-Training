function StepOne() {
    setTimeout(() => {
        var stepOne = "Step One";
        console.log(`${stepOne} completed after 8 seconds`);
    }, 8000);
}

function StepTwo() {
    setTimeout(() => {
        var stepTwo = "Step Two";
        console.log(`${stepTwo} completed after 3 seconds`);
    }, 3000);
}

function StepThree() {
    setTimeout(() => {
        var stepThree = "Step Three";
        console.log(`${stepThree} completed after 6 seconds`);
    }, 6000);
}

// Each function schedules its callback and returns immediately.
// The next function starts without waiting for that callback.
StepOne();
StepTwo();
StepThree();

/*
Expected completion order:
Step Two
Step Three
Step One
*/