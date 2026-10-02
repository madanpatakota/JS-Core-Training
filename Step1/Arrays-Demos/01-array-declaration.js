/*
An array stores a list of values in one variable.
Create an array using square brackets [].
Separate the values with commas.
Each value is called an element.
*/

// Array of numbers
var customerIDs = [1, 2, 3];
console.log("Customer IDs:", customerIDs);

// Array of strings
var customerNames = ["John", "Robert", "Peter"];
console.log("Customer Names:", customerNames);

// Array of decimal numbers
var productPrices = [999.99, 100.09, 10000.90];
console.log("Product Prices:", productPrices);

// An array can contain different types of values
var customerDetails = [1, "John", 1200.09, "London", true];
console.log("Customer Details:", customerDetails);

// An empty array
var shoppingCart = [];
console.log("Shopping Cart:", shoppingCart);

// length gives the number of elements
console.log("Total Customers:", customerNames.length); // 3