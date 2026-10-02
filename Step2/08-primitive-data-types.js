// Primitive Data Types and typeof
// typeof tells us the type of a value

// 1. Number
let employeeAge = 25;
let productPrice = 1499.50;

console.log("Employee Age:", employeeAge);
console.log("Employee Age Type:", typeof employeeAge); // number

console.log("Product Price:", productPrice);
console.log("Product Price Type:", typeof productPrice); // number

// 2. String
let employeeName = "John";
let companyName = 'MISARD';
let officeLocation = `Bangalore`;

console.log("Employee Name:", employeeName);
console.log("Employee Name Type:", typeof employeeName); // string

console.log("Company Name:", companyName);
console.log("Company Name Type:", typeof companyName); // string

console.log("Office Location:", officeLocation);
console.log("Office Location Type:", typeof officeLocation); // string

// 3. Boolean
let isEmployeeActive = true;
let isPaymentCompleted = false;

console.log("Employee Active:", isEmployeeActive);
console.log("Employee Active Type:", typeof isEmployeeActive); // boolean

console.log("Payment Completed:", isPaymentCompleted);
console.log("Payment Completed Type:", typeof isPaymentCompleted); // boolean

// 4. Undefined
let deliveryDate;

console.log("Delivery Date:", deliveryDate); // undefined
console.log("Delivery Date Type:", typeof deliveryDate); // undefined

// Assigning a string changes the type of the stored value
deliveryDate = "10 October 2026";

console.log("Updated Delivery Date:", deliveryDate);
console.log("Updated Delivery Date Type:", typeof deliveryDate); // string

// 5. Null
let selectedProduct = null;

console.log("Selected Product:", selectedProduct); // null
console.log("Selected Product Type:", typeof selectedProduct); // object

// JavaScript has a historical quirk: typeof null returns "object"
// null is still a primitive value, not an object


let selectedProduct1 = null;

console.log(typeof selectedProduct1); // "object"

// Check for null directly using ===
console.log(selectedProduct1 === null); // true

selectedProduct = "Keyboard";

console.log("Updated Selected Product:", selectedProduct);
console.log("Updated Selected Product Type:", typeof selectedProduct); // string

// 6. Symbol
let employeeID1 = Symbol("employeeID");
let employeeID2 = Symbol("employeeID");

console.log("Employee ID 1:", employeeID1);
console.log("Employee ID 1 Type:", typeof employeeID1); // symbol

console.log("Employee ID 2:", employeeID2);
console.log("Employee ID 2 Type:", typeof employeeID2); // symbol

console.log("Are the IDs equal?", employeeID1 === employeeID2); // false

// 7. BigInt
let largeRecordCount = 9007199254740993n;

console.log("Large Record Count:", largeRecordCount);
console.log("Large Record Count Type:", typeof largeRecordCount); // bigint