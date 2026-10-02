/*
An object stores related information as key-value pairs.
Create an object using curly braces {}.
Property names can be written inside quotes.
*/

let customerDetails = {
    "Name": "Rchandra",
    "Age": 30,
    "AadharNo": "0123-4567-89XX" // Sample value
};

console.log("Customer Details:", customerDetails);
console.log("Customer Details Type:", typeof customerDetails); // object

// Access properties using dot notation
console.log("Name:", customerDetails.Name);
console.log("Name Type:", typeof customerDetails.Name); // string

console.log("Age:", customerDetails.Age);
console.log("Age Type:", typeof customerDetails.Age); // number

console.log("Aadhar Number:", customerDetails.AadharNo);
console.log("Aadhar Number Type:", typeof customerDetails.AadharNo); // string

// Access properties using bracket notation
console.log("Name:", customerDetails["Name"]);
console.log("Age:", customerDetails["Age"]);
console.log("Aadhar Number:", customerDetails["AadharNo"]);

// Property names are case-sensitive
console.log(customerDetails.name); // undefined
console.log(typeof customerDetails.name); // "undefined"

// A property that does not exist returns undefined
console.log(customerDetails.email); // undefined
console.log(typeof customerDetails.email); // "undefined"