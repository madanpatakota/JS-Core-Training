
/**  Convert to the string to integer                               */
/*   JSON.stringfy used to show the string format in console.log    */
/*   JSON.stringfy used to convert any value into the string        */

var customerID_1_string = "1";
var customerID_1_number = parseInt(customerID_1_string);



console.log(parseInt(customerID_1_number));

/***************NaN (Not a Number)
    NaNmeans not a number which indicates that wheather given output in number format or not
*/

var customerID_2 = "c1";
if(isNaN(customerID_2)){
    console.log("Its not the number")
}
else{
    console.log("Its a number")
}



/********************************** Ternary Operaor *************************
 *   1. Ternary Operator is a conditional operator
 *   2. Its having the  3 operands
 *        a.first operand for check the condition ( weather its return true or value)
 *        b.Apply     '?' for handle the true  value. 
 *        c.Write the ':' for handle the false value.
 * 
 *   Note   : Here condition can be anything ( <= , >= , == , != )
 * 
 *   Syntax : <vaiable> =  <assignment> ? <handleincasetrue>: <handleincasefalse> ;
 * 
*/



if(100 == 100){
   return "Price is 100";
}
else{
    return "Price is not 100";
}



/* By using the Ternary operator we can get the same output.
   Use terynary operator where you are having the single statment in if and else conditions.
*/



// Example 1:
    var customer_price_1 = 100 == 100 ? "Price is 100" : "Price is not 100";
    console.log("customer_price_1" , customer_price_1);



// Example 2:
    var customerName     = "Clerk";

    var customer_price_2 = customerName == "John" ? "He is Clerk" : "He is not the Clerk";
    console.log("customer_price_2" , customer_price_2)





/************************ How to use mutli ternary operators ***********************/

var number = 0;

var number_status = number > 0 ? "Positive number" : number < 0 ? "negative" : "Zero";
console.log(number_status);




//***********************  How to check the type strictly ************************/

var customerID = "1";

if(customerID == 1){
    console.log("correct");
}
else{
    console.log("Not correct");
}


if(customerID === 1){
    console.log("correct");
}
else{
    console.log("Not correct");
}







                                               
                                                         
                                       









