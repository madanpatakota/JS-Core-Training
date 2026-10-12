// ==========================================================
// JavaScript Block Scope Example
// ==========================================================
// var   -> global-scoped, accessible outside the block
// let   -> Block-scoped, accessible only inside the block
// const -> Block-scoped, accessible only inside the block
//
// This example demonstrates the scope differences between
// var, let, and const when declared inside a block {}.
// ==========================================================


// ==================================================
// Global Variables
// ==================================================

var companyName = "Microsoft";
let trainerName = "Madan";
const courseName = "JavaScript";

console.log("%cGlobal Scope", "color:gold");

console.log("companyName =", companyName);
console.log("trainerName =", trainerName);
console.log("courseName =", courseName);


// ==================================================
// Block Scope
// ==================================================

{
    console.log("%cInside Block", "color:deepskyblue");

    // Accessible because they are declared outside
    console.log("companyName =", companyName);
    console.log("trainerName =", trainerName);
    console.log("courseName =", courseName);

    // Variables declared inside block
    var technology = "Angular";
    let topic = "Scope";
    const duration = "30 Minutes";

    console.log("technology =", technology);
    console.log("topic =", topic);
    console.log("duration =", duration);
}


// ==================================================
// Back To Global Scope
// ==================================================

console.log("%cOutside Block", "color:hotpink");

// var escapes the block
console.log("technology =", technology);

// Global variables still accessible
console.log("companyName =", companyName);
console.log("trainerName =", trainerName);
console.log("courseName =", courseName);

// let and const are block scoped
// console.log(topic);      // ReferenceError
// console.log(duration);   // ReferenceError