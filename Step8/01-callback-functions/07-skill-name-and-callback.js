// This function accepts two arguments:
// 1. A skill name
// 2. A callback function

function executeSkill(skillName, callbackFn) {
    // Forward the supplied skill name to the callback.
    callbackFn(skillName);
}

executeSkill(".NET", (skill) => {
    console.log(`My name is Madan and my skill is ${skill}`);
});

executeSkill("JavaScript", (skill) => {
    console.log(`My name is Madan and my skill is ${skill}`);
});

/*
Expected output:
My name is Madan and my skill is .NET
My name is Madan and my skill is JavaScript

skillName: Parameter of executeSkill.
callbackFn: Parameter holding the callback function.
skill: Parameter of the arrow callback.
*/