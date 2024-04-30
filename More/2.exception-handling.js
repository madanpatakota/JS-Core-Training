//After members of the array and string...

/***********************************How to handle the exceptions
 *  Exception halding is the process of handle the errors by try , catch and finally
 *  and mantain the regular JavaScript code
 *
 * Syntax
 *    try {
 *             <block of the code>
 *        }
 *    catch(ex){
 *             <block of the code>
 *        }
 *    finally{                       //optional
 *             <block of the code>
 *     }
 */

/*****************  How to use try catch blocks ...
                    Get customerLocation based on the customerName *****************/
//Without try catch 
var universeLength; // i didnot define any value here...

// var length = universeLength.length // Here you receive the error... 
// So you cannot execute after this error.
// console.log(length);
// console.log("I am waiting for you....");

//======================================================================
try{
    var length = universeLength.length // Here you receive the error...
    console.log(length);
}
catch(ex){
   console.log(ex);
}
console.log("I am waiting for you....");


