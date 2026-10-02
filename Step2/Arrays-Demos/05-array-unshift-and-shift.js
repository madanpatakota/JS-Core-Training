// unshift() adds an element at the beginning
var customerNames = ["John", "Robert", "Peter"];

console.log("Before unshift:", customerNames);

customerNames.unshift("James");
console.log("After unshift:", customerNames);
// ["James", "John", "Robert", "Peter"]

// unshift() returns the new array length
var totalCustomers = customerNames.unshift("Mary");
console.log("New Length:", totalCustomers); // 5
console.log("Customers:", customerNames);

// shift() removes the first element
// It returns the removed element
var removedCustomer = customerNames.shift();

console.log("Removed Customer:", removedCustomer); // Mary
console.log("After shift:", customerNames);
// ["James", "John", "Robert", "Peter"]

// After adding or removing at the beginning, indexes change
console.log("Customer at Index 0:", customerNames[0]); // James

// push()    → Add at the end
// pop()     → Remove from the end
// unshift() → Add at the beginning
// shift()   → Remove from the beginning