// Combine a supplied value, a callback and a delay.

function executeSkill(skillName, callbackFn) {
    console.log("Starting the skill check");

    setTimeout(() => {
        callbackFn(skillName);
    }, 2000);
}

executeSkill("JavaScript", (skill) => {
    console.log(`Skill check completed: ${skill}`);
});

console.log("Other work can continue");

/*
Expected output:
Starting the skill check
Other work can continue
Skill check completed: JavaScript   // After the delay
*/