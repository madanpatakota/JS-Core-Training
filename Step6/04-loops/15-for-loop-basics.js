// A loop repeats a block of code.

/*
Syntax:

for (initialization; condition; update) {
    // Code to repeat
}
*/

// Initialization: step starts at 0.
// Condition: Continue while step is less than 5.
// Update: Increase step by 1 after each iteration.

for (let step = 0; step < 5; step = step + 1) {
    console.log("Completed iteration:", step + 1);
}

// Output:
// Completed iteration: 1
// Completed iteration: 2
// Completed iteration: 3
// Completed iteration: 4
// Completed iteration: 5

// step + 1 displays a count starting from 1.
// It does not change the step variable.

// step++ is another way to increase step by 1.