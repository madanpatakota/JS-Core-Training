// A nested array is an array inside another array

// Each inner array stores a customer's name, age and city
var customersList = [
    ["John", 30, "London"],
    ["Robert", 35, "Bangalore"],
    ["Peter", 28, "Hyderabad"]
];

console.log("All Customers:", customersList);

// Access the first customer's complete details
console.log("First Customer:", customersList[0]);
// ["John", 30, "London"]

// First index selects the inner array
// Second index selects a value inside that array
console.log("First Customer Name:", customersList[0][0]); // John
console.log("First Customer Age:", customersList[0][1]);  // 30
console.log("First Customer City:", customersList[0][2]); // London

console.log("Second Customer Name:", customersList[1][0]); // Robert
console.log("Third Customer City:", customersList[2][2]); // Hyderabad

// Update a value inside a nested array
customersList[0][2] = "Chennai";
console.log("Updated First Customer:", customersList[0]);
// ["John", 30, "Chennai"]