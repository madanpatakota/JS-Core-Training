/*****************************default parameters *****************
 * A function can accept the default values 
 * incase if we would't the pass the parameters from the function.....
 */

 function getcustomerIntroduction(name , location = "London" , dateofbirth = "1-1-1990"){
    console.log(name + "   " + location  + "    " + dateofbirth );
 }

getcustomerIntroduction("William");






/*****************************Rest parameters *****************
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
 */

function getcustomerIntroduction_1(name , location , dateofbirth , gender){
     console.log(name , location , dateofbirth , gender);
}

getcustomerIntroduction_1("William","London","12-10-1965","Male");

/*****************************
 * Q) What if iam going to add few more parameters from nextime.*/

 function getcustomerIntroduction_2(name , location, ...args){
    console.log(name , location , args);
 }

 /*Note : here rest parameter gives the collection of the values in the format of array */

 getcustomerIntroduction_2("William","London","12-10-1965","Male");




 /*****************************Spread parameters *****************
 * The JavaScript spread operator ( ... ) allows us to quickly copy all or 
 *  part of an existing array or object into another array or object
 */

 var customerInfo = ["William","London","12-10-1965","Male"];
 var cusomterInfo_1 = [customerInfo, "198.06" , "Olivia"];
 console.log("with out spread approach" , cusomterInfo_1); 


 //*************With spread syntax */
 var cusomterInfo_2 = [...customerInfo, "198.06" , "Olivia"];
 console.log("with spread approach" , cusomterInfo_2); 


 

 /********************************* De-structuring  ******************************
                    Destructuring means to break down a complex structure into simpler parts. 
 
 With the syntax of destructuring, you can extract smaller fragments from objects and arrays. 
 It can be used for assignments and declaration of a variable.
 */


 var food = ["eggs","chicken","grapes"];
 var [veg,nonveg,fruits] = ["eggs","chicken","grapes"];

 console.log(veg);
 console.log(nonveg);
 console.log(fruits); 

 var [...allFoodItems] = ["eggs","chicken","grapes"];
 console.log(allFoodItems);

 
 var [veg,nonveg,fruits] = ["eggs","chicken","grapes","Watermelon"];
 var [veg,nonveg,...fruits] = ["eggs","chicken","grapes","Watermelon"];

 console.log(fruits);

 /*Always rest operator in the last poisiton. */




/**********************************Template literals 
Template Literals are strings that can include embedded expressions. we use with `(backtick) and ${}  symobols

*/
var customer = {
    "location" : "London",
    "name    " : "William"
};

var customer_details = `Customer name is ${cusotomer.name} and  location is ${customer.location}`;
console.log(customer_details);


 
//=============================Async and await =======================================//

