// Nested synchronous callbacks

function stepOne(callbackFn) {
    console.log("Step One");
    callbackFn();
}

function stepTwo(callbackFn) {
    console.log("Step Two");
    callbackFn();
}

function stepThree() {
    console.log("Step Three");
}

stepOne(() => {
    stepTwo(() => {
        stepThree();
    });
});

/*
Expected output:
Step One
Step Two
Step Three
*/