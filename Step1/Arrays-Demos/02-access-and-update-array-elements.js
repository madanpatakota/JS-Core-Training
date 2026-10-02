// Array indexes start at 0
var customerNames = ["John", "Robert", "Peter"];

// Access elements using their indexes
console.log("First Customer:", customerNames[0]);  // John
console.log("Second Customer:", customerNames[1]); // Robert
console.log("Third Customer:", customerNames[2]);  // Peter

// Get the last element using length - 1
console.log(
    "Last Customer:",
    customerNames[customerNames.length - 1]
); // Peter

// An index outside the array returns undefined
console.log(customerNames[10]); // undefined

// Update an existing element using its index
customerNames[1] = "James";
console.log("Updated Customers:", customerNames);
// ["John", "James", "Peter"]

// Updating an element does not change the array length
console.log("Total Customers:", customerNames.length); // 3