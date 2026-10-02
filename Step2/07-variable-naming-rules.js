// Variable Naming Rules and Suggestions

// 1. Do not use spaces in variable names
let employeeName = "John"; // Correct
// let employee name = "John"; // Incorrect

// 2. Do not use special characters such as @, # or -
// Underscore (_) and dollar sign ($) are allowed
let employeeSalary = 30000; // Correct
// let employee@Salary = 30000; // Incorrect
// let employee-salary = 30000; // Incorrect

// 3. Do not start a variable name with a number
let employee1 = "John"; // Correct
// let 1employee = "John"; // Incorrect

// 4. Use camelCase: Start with a lowercase letter,
// then capitalise the first letter of each following word
let customerName = "Peter";
let productTotalAmount = 3000;

// 5. Use meaningful names that explain the stored value
let deliveryCharge = 100; // Clear
let x = 100; // Valid, but its meaning is unclear

// 6. Variable names are case-sensitive
let city = "Bangalore";
let City = "Hyderabad";
console.log(city); // Bangalore
console.log(City); // Hyderabad

// 7. Do not use JavaScript keywords as variable names
let orderStatus = "Pending"; // Correct
// let return = "Pending"; // Incorrect

// 8. Use consistent spelling throughout your code
let accountBalance = 10000;
console.log(accountBalance); // Correct
// console.log(accountbalance); // Incorrect: Different name