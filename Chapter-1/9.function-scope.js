
/*  What is scope in JS ?
    The way of the access
    (or)
    The way of visibility about the variable

    Variable which is declared outside of the function i.e. then that is the global scope.
    Variable which is declared inside  of the function i.e. then that is the local scope.

*/

var customerName  = "R.John";

//Example 1 :
function customerBankDetails(){
    var customerPassword = "QWe@#1!";
    console.log("customerName     inside of the function" , customerName);
    console.log("customerPassword inside of the function" , customerPassword);
}

customerBankDetails();
console.log("customerName outside of the function" , customerPassword);
console.log("customerPassword outside of the function" , customerPassword);

// Note : debugging the code will explain into the coming lessions



