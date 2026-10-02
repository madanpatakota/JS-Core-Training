// Explanation about the const keyword
// const is used when a variable's value should not be reassigned

// Example 1: Employee details
const employeeName = "John";
const employeeSalary = 30000;

console.log("Employee Name:", employeeName);
console.log("Employee Salary:", employeeSalary);

// const does not allow updating the value
// employeeSalary = 35000; // TypeError

// Example 2: Shopping cart total
const productName = "Keyboard";
const price = 1500;
const quantity = 2;
const totalAmount = price * quantity;

console.log("Product:", productName);
console.log("Total Amount:", totalAmount);

// Example 3: Bank balance calculation
const openingBalance = 10000;
const depositAmount = 2000;
const balanceAfterDeposit = openingBalance + depositAmount;

console.log("Balance After Deposit:", balanceAfterDeposit);

const withdrawalAmount = 3000;
const balanceAfterWithdrawal = balanceAfterDeposit - withdrawalAmount;

console.log("Balance After Withdrawal:", balanceAfterWithdrawal);

// Example 4: const does not allow redeclaration
const orderStatus = "Pending";
console.log("Order Status:", orderStatus);

// const orderStatus = "Delivered"; // SyntaxError

// const also does not allow reassignment
// orderStatus = "Delivered"; // TypeError

// const requires a value when declared
// const customerName; // SyntaxError

// var: Allows redeclaration and reassignment
// let: Does not allow redeclaration but allows reassignment
// const: Does not allow redeclaration or reassignment