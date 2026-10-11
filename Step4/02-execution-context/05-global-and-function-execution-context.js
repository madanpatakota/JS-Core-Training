// 🌍 Global Execution Context
let companyName = "MISARD";
let employeeName = "Madan";

function showEmployeeDetails(name) {
    // ⚙️ Function Execution Context
    // name is a parameter and employeeRole is a local variable.
    let employeeRole = "Developer";

    debugger;

    console.log("Company Name:", companyName);
    console.log("Employee Name:", name);
    console.log("Employee Role:", employeeRole);
}

console.log("Before calling the function");


// Creates a new function execution context.
showEmployeeDetails(employeeName);


console.log("Back in the global execution context");

showEmployeeDetails("Ravi");

// ❌ employeeRole is local to showEmployeeDetails.
console.log("Employee Role outside function:", employeeRole);
// ReferenceError: employeeRole is not defined

// This statement will not execute because of the error above.
console.log("Program completed");

/*
Practice:
1. Run the script with Developer Tools open.
2. At the first debugger, inspect companyName and employeeName.
3. Move to showEmployeeDetails(employeeName).
4. Use Step Into to enter the function.
5. Step Over until employeeRole has its value.
6. Inspect name and employeeRole.
7. Check showEmployeeDetails in the Call Stack.
8. Use Step Out to return to the global code.
9. Continue to the second call and inspect name = "Ravi".

Remember:
Global code runs in the global execution context.
Each function call creates a new function execution context.
The function can access companyName from the outer scope.
*/