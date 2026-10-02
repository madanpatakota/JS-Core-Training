// A default import does not use curly braces.
// We can choose a different valid name for the import.

import EmployeeDetails from "./employee-module.js";

let employee = new EmployeeDetails("John");
employee.displayName();