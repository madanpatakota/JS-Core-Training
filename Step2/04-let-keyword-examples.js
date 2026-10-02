// Explanation about the let keyword
// Example 1: Employee details
let employeeName = "John";  // A string is text written inside quotes
let employeeSalary = 30000; // A number is written without quotes

console.log("Employee Name:", employeeName);
console.log("Employee Salary:", employeeSalary);

// Updating the salary
employeeSalary = 35000;
console.log("Updated Salary:", employeeSalary);

// Example 2: Shopping cart total
let productName = "Keyboard";
let price = 1500;
let quantity = 2;
let totalAmount = price * quantity;

console.log("Product:", productName);
console.log("Total Amount:", totalAmount);

// Example 3: Bank balance
let accountBalance = 10000;
let depositAmount = 2000;

accountBalance = accountBalance + depositAmount;
console.log("Balance After Deposit:", accountBalance);

let withdrawalAmount = 3000;

accountBalance = accountBalance - withdrawalAmount;
console.log("Balance After Withdrawal:", accountBalance);

// Example 4: let does not allow redeclaration in the same scope
let orderStatus = "Pending";
console.log("Order Status:", orderStatus);

// Uncomment the next line to see the SyntaxError
// let orderStatus = "Delivered";

// Updating the existing variable is allowed
orderStatus = "Delivered";
console.log("Updated Order Status:", orderStatus);



// var allows redeclaring the same variable; let does not. Both allow updating its value.

// var allows redeclaration
var customerName = "John";
var customerName = "Peter";
console.log(customerName); // Peter

// let does not allow redeclaration in the same scope
let customerCity = "Bangalore";
// let customerCity = "Hyderabad"; // SyntaxError

// let allows updating the existing value
customerCity = "Hyderabad";
console.log(customerCity); // Hyderabad