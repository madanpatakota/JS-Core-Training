// ==================================================
// Global Scope
// ==================================================

let globalColor = "Yellow";

console.log("%cGlobal Scope", "color:yellow");
console.log("globalColor =", globalColor);


// ==================================================
// Local Block 1
// ==================================================

{
    // Global variables can be accessed inside local blocks.
    console.log("%cLocal Block 1", "color:deepskyblue");
    console.log("globalColor =", globalColor);

    // local1 exists only within Block 1.
    let local1 = "Blue";
    console.log("local1 =", local1);

    // console.log(local2); // ReferenceError
}


// ==================================================
// Local Block 2
// ==================================================

{
    // Global variables can be accessed inside local blocks.
    console.log("%cLocal Block 2", "color:hotpink");
    console.log("globalColor =", globalColor);

    // local2 exists only within Block 2.
    let local2 = "Pink";
    console.log("local2 =", local2);

    // console.log(local1); // ReferenceError
}


// ==================================================
// Back To Global Scope
// ==================================================

console.log("%cBack To Global Scope", "color:yellow");
console.log("globalColor =", globalColor);

// Block-scoped variables cannot be accessed here.
// console.log(local1); // ReferenceError
// console.log(local2); // ReferenceError