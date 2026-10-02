//Explanaiton about the Var Keyword
// Example 1: Employee details


var employeeName = "John";   // Generally here "John" we say string means collection of charcters we have to declare the string in double quotes here
var employeeSalary = 30000;  // Its number

console.log("Employee Name:", employeeName);
console.log("Employee Salary:", employeeSalary);

// Updating the salary
employeeSalary = 35000;
console.log("Updated Salary:", employeeSalary);


// Example 2: Shopping cart total
var productName = "Keyboard";
var price = 1500;
var quantity = 2;
var totalAmount = price * quantity;

console.log("Product:", productName);
console.log("Total Amount:", totalAmount);



// Example 3: Bank balance
var accountBalance = 10000;
var depositAmount = 2000;

accountBalance = accountBalance + depositAmount;
console.log("Balance After Deposit:", accountBalance);

var withdrawalAmount = 3000;

accountBalance = accountBalance - withdrawalAmount;
console.log("Balance After Withdrawal:", accountBalance);


// Example 4: Redeclaring a variable using var
var orderStatus = "Pending";
console.log("Order Status:", orderStatus);

var orderStatus = "Delivered";
console.log("Updated Order Status:", orderStatus);