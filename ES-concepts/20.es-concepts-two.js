/**********************************************Arrow function*********************************************************
        Arrow function is one of the features introduced in the ES6 version of JavaScript. 
        It allows you to create functions in a cleaner way compared to regular functions

        Notes : 
        * 1. we have to remove the function keyword
        * 2. Decorate with () => { } Syntax
 */


/*************Normal function *************/

function getName(){
    return "Peter.Jr"
}

var customer_name_1 = getName();
console.log("customer_name_1" , customer_name_1);



/*****************************Before going to second approach */

var customer_name_2 = "Peter.Jr";



/*************** Even i can handle the same thing in another approach(variable assigned by the function directly) .. Another trick **************/ 
var customer_name_3 = function(){
                                return "James";
                             };
console.log("customer_name_3" , customer_name_3());


/*********************With the help of the arrow function *****************/
var customer_name_4 =  () => { 
                                return "Micheal";
                             };
console.log("customer_name_4" , customer_name_4());



/**************Passing the parameters to normal function */

function getCustomerName(cutomerName){
    return cutomerName;
}
var customer_name_5 = getCustomerName("Peter.Jr");
console.log("customer_name_5" , customer_name_5);


/*************** Even i can handle the same thing in another approach(variable assigned by the function directly) .. Another trick **************/ 
var customer_name_6 =  function(cutomerName){
                                                return cutomerName;
                                            }

console.log("customer_name_6" , customer_name_6("Andy"));


/**************Passing the parameter to arrow function */

var customer_name_7 =  (cutomerName)  => {
    return cutomerName;
}

console.log("customer_name_7" , customer_name_7("William"));



/************* Passing the multiple parameters to the arrow functions ******************/

//Concat 2 strings
var customer_name_locaiton =  (cutomerName,cusomerLocation) => {
    return cutomerName.concat(cusomerLocation);
}

console.log("customer_name_locaiton" , customer_name_locaiton("William","London"));


//Concat 2 Arrays
var customers_names_locaions_1 =  (cutomerName,cusomerLocation) => {
    return cutomerName.concat(cusomerLocation);
}

console.log("customer_name_7" , customers_names_locaions_1(["William","Andy" ],["London" , "New york"]));



/******************************  One more way you can write the for gets the output **********************************

Recommandation Note : If you have only one statement in the block then only follow below code approach.

*/

var customers_names_locaions_2 =  (cutomerName,cusomerLocation) =>  cutomerName.concat(cusomerLocation);
console.log("customer_name_7" , customers_names_locaions_2(["William","Andy" ],["London" , "New york"]));


//*************************************** arrow functions in real time scenerios */


var customers =  [{
    "name"            : "Clerk",
    "price"           :  200.09,
    "location"        : "London",
 },
 {
    "name"            : "William",
    "price"           :  100.09,
    "location"        : "London",
 },
 {
    "name"            : "Andy",
    "price"           :  312.09,
    "location"        : "Washington",
 },
 {
    "name"            : "Andy",
    "price"           :  56.09,
    "location"        : "Bern",
 }];

 /*  Here filter is expecting the method signature
          syntax : <arrayvalue>.filter(function(value,index,array){});
 */


 var customers1 = customers.filter(function(customer,index,array){
    /*
      Task :  
      console.log(index);
      console.log(array);
    */
    if(customer.name == "Andy"){
        return customer;
    }
 })

 console.log("ByName " , customers1);


 //another approch by arrow syntax
 var customers1 = customers.filter((customer)=>{
    if(customer.name == "Andy"){
        return customer;
    }
 })

 console.log("ByName " , customers1);

 /****Take your own example with one normal function. implement the array filter into that ***/








