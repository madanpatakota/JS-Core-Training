// ==================================================
// Global Execution Context
// ==================================================

let companyName = "Microsoft";

console.log("%cGlobal Execution Context Starts", "color:gold");

console.log("companyName =", companyName);


// ==================================================
// Function 1
// ==================================================

function employeeOne() {

    console.log("%cEmployee One Context", "color:deepskyblue");

    let employeeName = "John";

    console.log("companyName =", companyName);
    console.log("employeeName =", employeeName);
}


// ==================================================
// Function 2
// ==================================================

function employeeTwo() {

    console.log("%cEmployee Two Context", "color:hotpink");

    let employeeName = "David";

    console.log("companyName =", companyName);
    console.log("employeeName =", employeeName);
}


// ==================================================
// Function Calls
// ==================================================

employeeOne();
employeeTwo();

console.log("%cBack To Global Execution Context", "color:gold");

console.log("companyName =", companyName);

// Function variables are not accessible here.
// console.log(employeeName); // ReferenceError