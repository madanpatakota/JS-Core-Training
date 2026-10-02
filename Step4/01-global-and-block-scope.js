// Global scope: declared outside all functions and blocks.
var greenColor = "Green";

console.log("Global Scope:", greenColor);

// Block 1
{
    // This block can access the global variable.
    console.log("Block 1 - Global Color:", greenColor);

    // let creates a variable scoped to this block.
    let blueColor = "Blue";
    console.log("Block 1 - Local Color:", blueColor);

    // Block 1 cannot access a variable declared inside Block 2.
    // console.log(pinkColor); // ReferenceError
}

// Block 2
{
    console.log("Block 2 - Global Color:", greenColor);

    let pinkColor = "Pink";
    console.log("Block 2 - Local Color:", pinkColor);

    // Block 2 cannot access a variable declared inside Block 1.
    // console.log(blueColor); // ReferenceError
}

// The global variable is still accessible.
console.log("Outside Both Blocks:", greenColor);

// Block variables are not accessible outside their blocks.
// Uncomment ONE line at a time to demonstrate the error.

// console.log(blueColor); // ReferenceError
// console.log(pinkColor); // ReferenceError