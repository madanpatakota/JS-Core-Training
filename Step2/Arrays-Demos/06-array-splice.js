// splice() can remove, add or replace elements at a chosen index
var customerNames = ["John", "Robert", "Peter", "James"];

// Remove one element starting at index 1
// First argument: Starting index
// Second argument: Number of elements to remove
var removedCustomers = customerNames.splice(1, 1);

console.log("Removed Customers:", removedCustomers); // ["Robert"]
console.log("Remaining Customers:", customerNames);
// ["John", "Peter", "James"]

// Add an element at index 1 without removing anything
customerNames.splice(1, 0, "Mary");
console.log("After Adding Mary:", customerNames);
// ["John", "Mary", "Peter", "James"]

// Replace one element at index 2
customerNames.splice(2, 1, "Smith");
console.log("After Replacing Peter:", customerNames);
// ["John", "Mary", "Smith", "James"]