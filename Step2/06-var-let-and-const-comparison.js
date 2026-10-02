// var: Allows updating and redeclaring
var employeeSalary = 30000;
console.log("var - Original Salary:", employeeSalary);

employeeSalary = 35000; // Updating is allowed
console.log("var - Updated Salary:", employeeSalary);

var employeeSalary = 40000; // Redeclaring is allowed
console.log("var - Redeclared Salary:", employeeSalary);

// let: Allows updating but not redeclaring in the same scope
let productPrice = 1500;
console.log("let - Original Price:", productPrice);

productPrice = 2000; // Updating is allowed
console.log("let - Updated Price:", productPrice);

// let productPrice = 2500; // SyntaxError: Cannot redeclare

// const: Does not allow updating or redeclaring
const companyName = "MISARD";
console.log("const - Company Name:", companyName);

// companyName = "Another Company"; // TypeError: Cannot reassign
// const companyName = "Another Company"; // SyntaxError: Cannot redeclare

// Error lines are commented so the script can run.
// Uncomment one error line at a time to demonstrate it.




// var: Allows redeclaration and reassignment
// let: Does not allow redeclaration but allows reassignment
// const: Does not allow redeclaration or reassignment