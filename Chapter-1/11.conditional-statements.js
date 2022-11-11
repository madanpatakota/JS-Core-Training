
/******** boolean is a datatype which returns the true or false */

var isAdminRole = true;           // I enquired that wheather he is having the admin role or not
var isSalesRepRole = false;       // I enquired that wheather he is having the salesrep role or not


/*
 * Scenerio :  How to use the boolean value .
 *             Mostly we are using the boolean values is in the conditional statements....
 *             Conditional statements with if and else 
 * 
 * Means conditionally you are appling the the if ane else
 * syntax : if(<condition>) {
 *                statement ;
 *                }
 *          else {
 *                statement ;
 *               } 
 */

if(isAdminRole) {
    console.log("Hey!! He is a admin");
}
else{
    console.log("Hey!! He is not a admin")
}

// we use else if statement between the if and else condition.

 /* syntax : if(<condition>) {
 *              statement ;
 *                }
 *          else if(<condition>) {
 *              statement ;
 *                }
 *          else {
 *               statement ;
 *               } 
 */



var isAdminRole = false;           // I enquired that wheather he is having the admin role or not
var isSalesRepRole = false;       // I enquired that wheather he is having the salesrep role or not

if(isAdminRole){
    console.log("Hey!! He is a admin");
}
else if(isSalesRepRole){
    console.log("Hey!! He is a sales rep")
}
else{
    console.log("Hey!! He is a not admin and salesrep ... I think he might be different role..");
}


/********How to check the value is correct or not in conditional statement. */
//       Use == (double equal) operator.

var customerID = 1;

if(customerID == 1){          // That means checking the value is 1 or not in if conidtion
                              // By using double equal operator
    console.log("Customer Id is 1");
}
else{
    console.log("Customer Id is not 1");
}


var customerID = 1;
if(customerID != 1){          // That means checking the value is 1 or not in if conidtion
                              // By using not equal operator  
    console.log("Customer Id is not 1");
}
else{
    console.log("Customer Id is 1");
}



/*  ******* How to use the and(&&) or(||) in the conditional statements. 

            &&(and) operator
            T && T  ->  T  
            T && F  ->  F
            F && T  ->  F
            F && F  ->  F

            ||(or) operator
            T || T  ->  T  
            T || F  ->  T
            F || T  ->  T
            F || F  ->  F
*/



var customerID = 1;
var customerName = "John"

// Example 1
if(customerID == 1 && customerName == "John"){
    console.log("Example 1 : correct values");
}
else{
    console.log(" Example 1 : wrong values");
}

// Example 2
if(customerID == 2 && customerName == "John"){
    console.log("Example 2 : correct values");
}
else{
    console.log("Example 2 : wrong values");
}

// Example 3
if(customerID == 2 || customerName == "John"){
    console.log("Example 3 : correct values");
}
else{
    console.log("Example 3 : wrong values");
}


//Example 4
var customerPrice = 1000 ;
if( customerPrice > 100 ){
   console.log("Price is greter than 100")
}
else{
    console.log("Price is not greter than 100")
}

//Example 5
var customerPrice = 1000 ;
if( customerPrice >= 1000 ){
   console.log("Price is greter than equal to 1000")
}
else{
    console.log("Price is not greter than equal to 100")
}



// Task : Apply the lessthan and eqal to here.
//Example 5
var customerPrice_1 = 1000 ;
var customerPrice_2 = 2000 ;
if( customerPrice_1 >= 1000 && customerPrice_2 >= 3000){
   console.log("Prices are OK");
}
else{
    console.log("Prices are not OK");
}


/*How to use the if and else in funcitons*/
//Declaration of the function
function getFullNameLocationDetails(location){
     if( location == "AUS" ) {
          return "Austraila"
     }
     else if(location == "SA"){
          return "South Africa";
     }
     else{
          return "No Loations are not matching... Please check with another location.";
     }
}

//calling the function
var location_details = getFullNameLocationDetails("AUS");
console.log(location_details);


/*Note : implement < , > , != operators in the functions.*/








 
