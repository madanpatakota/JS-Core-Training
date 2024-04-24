/*

 Why the ECMA Script?
  (European Computer Manufacturers Association Script)
  ECMAScript is a general-purpose programming language that is implemented in Javascript and some other languages. 
  It is the scripting language that formed the basis of browser-based Javascript

 Javascript is using the ECMAScript standards.
 Current ECMAScript latest release is ECMA2022 June 13 =

 Note : Ecmascript first version is 1997

 Now a days people are thinking javascript contains the ecma latestversion

 In my current project we are using the ecma script 2015 version or es6 version.

 */

/******************************-----------------------------------------------********* */

/* By using the var keyword we can declare the variable more than 1.
    By using the let keyword we can declare the variable only once.
 */

var customerName = "Clerk";
var customerName = "Peterson";
console.log(customerName);

/* let we can assign multiple times .. */
/* but declation should be only once ... */
let empName = "Clerk";
    empName = "Peterson";

console.log(empName);

if (true) {
  let skill = "Javascript";
  console.log(skill);
}

//console.log(skill1);
console.log(skill);  //error 






/******* More about the let */
// // function checkingScope() {
// //   let scopeStatus = "scope - 1 ";
// //   if (true) {
// //     scopeStatus = "scope - 2"; // value is overriding from function block scope to block scope
// //     console.log("Block scope status is ", scopeStatus);
// //   }
// //   console.log("Function block scope status is ", scopeStatus);
// // }

// // checkingScope();
// // console.log(this.scopeStatus);

/******* Here let i am using in different ways */
// // function checkingScope_1() {
// //   //let status1 = "scope4";
// //   var status1 = "scope 1";
// //   if (true) {
// //     let scopeStatus = "scope 2"; // value is overriding from function block scope to block scope
// //     var scopeStatus = "scope 3";
// //     console.log("Block scope status is ", scopeStatus);
// //   }
// //   console.log("Function block scope status is ", scopeStatus);
// // }

// // checkingScope_1();

/************.................Declare the variable with const.................. **/

let customerName_1 = "John";
customerName_1 = "Peterson";
//console.log("customerID_1" , customerName_1);

// Use below code.
// const customerName_2 = "John";
//       customerName_2 = "Peterson";
// console.log(customerName_2);

/* Get customerLocation based on the customerName */
function getCustomerLocation(name) {
  //const customerLocation = "UK";
  var customerLocation = "UK";
  customerLocation = name + " and from  London";
  var length = 5;

  for (var index = 0; index < length; index++) {
    console.log(customerLocation);
  }
}

//getCustomerLocation("John");


//getCustomerLocation("John");

/*************** we can Mutate(change) the value by array */

const customerNames = ["John", "Clerk"];

customerNames[0] = "Peterson";
customerNames[1] = "Robert.J";

//console.log(customerNames);

/***********How to prevent(stop) the modification the value in obj by freeze method */
const employee = {
  ID: 1,
  Name: "John",
  Location: "London",
};

function getEmployeeLocation(employeeName) {
  //Object.freeze(employee);   // we can use Object.freeze for the freeze(wo't allow update) the values
  if (employeeName == "John") {
    employee.ID = 2; //  i am trying to update the ID of employee(desined by the const);
  }
  return employee;
}

//let employeeDetails = getEmployeeLocation("John");
//console.log(employeeDetails);
