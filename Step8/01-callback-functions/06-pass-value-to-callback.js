// The receiving function can supply arguments when calling the callback.

function executeSkill(callbackFn) {
    callbackFn("JavaScript");
}

// skill receives "JavaScript" from callbackFn("JavaScript").
executeSkill((skill) => {
    console.log(`My name is Madan and my skill is ${skill}`);
});

/*
Expected output:
My name is Madan and my skill is JavaScript
*/