// Named imports use curly braces.
// ./ means the file is in the current folder.

import {
    companyName,
    companyDetails,
    displayWelcome,
    Employee
} from "./employee-module.js";

console.log("Company Name:", companyName);
console.log("Location:", companyDetails.location);

displayWelcome();

let employee = new Employee("John", 30000);
employee.displayDetails();