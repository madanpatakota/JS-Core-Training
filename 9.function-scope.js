
/*  What is scope in JS ?
    The way of the access
    (or)
    The way of visibility about the variable

    Variable which is declared outside of the function i.e. then that is the global scope.
    Variable which is declared inside  of the function i.e. then that is the local scope.

*/

var customerName  = "R.John";

//Example 1 :
function customerFirstBankDetails(){
    var customerPassword = "QWe@#1!";
    console.log("customerName     inside of the function" , customerName);
    console.log("customerPassword inside of the function" , customerPassword);
}

customerFirstBankDetails();
console.log("customerName outside of the function" , customerPassword);
console.log("customerPassword outside of the function" , customerPassword);

// Note : debugging the code will explain into the coming lessions



//Example 2 : functions declared by variable
var customerSecondBankDetails = function() {
    var customerPassword = "QWe@#1!";
    console.log("customerName     inside of the function" , customerName);
    console.log("customerPassword inside of the function" , customerPassword);
}

customerSecondBankDetails();
console.log("customerName outside of the function" , customerPassword);
console.log("customerPassword outside of the function" , customerPassword);


//Example 3 : Arrow functions
var customerThirdBankDetails = () => {
    var customerPassword = "QWe@#1!";
    console.log("customerName     inside of the function" , customerName);
    console.log("customerPassword inside of the function" , customerPassword);
}

customerThirdBankDetails();
console.log("customerName outside of the function" , customerPassword);
console.log("customerPassword outside of the function" , customerPassword);

//=============================function with input parameters =====================================//


// Example 1 : 
function getCustomerID_1(ID){
    console.log("Your input value is " , ID)
}

getNamebyCustomerID(1);


// Example 2 :  variable function with input value
var getCustomerID_2 = function(ID){
    console.log("Your input value is " , ID)
}

getCustomerID_2(2);


// Example 3 :  Arrow function with input value
var getCustomerID_3 = (ID) => {
    console.log("Your input value is " , ID)
}

getCustomerID_3(3);


/* settimeout function */

setTimeout(function () {
    console.log("Step 1 complete");
    var output =  callback();
    console.log(output);
}, 1000);


  
//Keep in mind in future we mostly use the arrow functions....

