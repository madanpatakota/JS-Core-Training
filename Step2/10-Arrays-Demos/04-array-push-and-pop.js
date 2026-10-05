// push() adds an element at the end
var customerNames = ["John", "Robert", "Peter"];

console.log("Before push:", customerNames);

customerNames.push("James");
console.log("After push:", customerNames);
// ["John", "Robert", "Peter", "James"]

// push() returns the new array length
var totalCustomers = customerNames.push("Mary");
console.log("New Length:", totalCustomers); // 5
console.log("Customers:", customerNames);

// pop() removes the last element
// It returns the removed element
var removedCustomer = customerNames.pop();

console.log("Removed Customer:", removedCustomer); // Mary
console.log("After pop:", customerNames);
// ["John", "Robert", "Peter", "James"]

// Add an inner array as one element
var customersList = [
    ["John", 30, "London"],
    ["Robert", 35, "Bangalore"]
];

customersList.push(["Smith", 60, "Melbourne"]);
console.log("After Adding Customer:", customersList);

// Remove the last customer's inner array
var removedCustomerDetails = customersList.pop();
console.log("Removed Customer Details:", removedCustomerDetails);
// ["Smith", 60, "Melbourne"]
console.log("Remaining Customers:", customersList);