
/* object is nothing but a key-value pair combination  */

/*
    var obj = {
        <key> : <value>,
        <key> : <value>,
        <key> : <value>,
        --------------
    }

    Here value can be anything :      Like number , string , array , undefined , null ,
                                          boolean again object also
                                          
    Key                        :      You can represent in either string format 
                                            or without string format.
    Recommndation              :      Use string format for the key.
    because spaces in the key  with out string representation not allowed to create the object.

    i used to say sometimes property name(key)    and    property value(value).
*/


//Example 1 : 
var customer_1 =  {
                    "name" : "John"
                };
console.log("customer_1" , customer_1);

//Example 2 : 

var customer_2 =  {
                     "name"            : "Clerk",
                     "price"           :  100.09,
                     "location"        : "London",
                     "isAdmin"         :  true,
                     "family_details"  :  [ "Mary", "Robert.J" , 10 ],
                     "streetname"      :  null,
                     "travelldtoIndia" :  undefined
                  };
console.log("customer_2" , customer_2);


//Example 3 : 
var customer_3 =  {
                     "name"            : "Clerk",
                     "price"           :  100.09,
                     "location"        : "London",
                     "isAdmin"         :  true,
                     "family_details"  :  {
                                            "spouse_name" :  "Mary",
                                            "kid_name"    :   "Robert.J",
                                            "kid_age"     :   10
                                          },
                     "streetname"      :  null,
                     "travelldtoIndia" :  undefined
                  };
console.log("customer_3", customer_3);


//Example 4 : 
var customers_4 = [  
                    { 
                        "name" : "John",
                        "location" : "Wasington",
                    },
                    { 
                        "name" : "Clerk",
                        "location" : "New Jersey",
                    }
                ];
/* Array : collection of the values . values . values . values
   Examples : number , string , array , undefined , null , boolean , array , object
*/


console.log(customers_4);

/* How to access the value from the object
 
 Answer : with the help of the key

    Way  :  By dot(.) notation
            or index([]) signature
*/

//From Example 1 : 
var customer_1 =  {
    "name" : "John"
};
console.log("by .     " , customer_1.name);
console.log("by index " , customer_1["name"]);



//From Example 2 : 
var customer_2 =  {
    "name"            : "Clerk",
    "price"           :  100.09,
    "location"        : "London",
    "isAdmin"         :  true,
    "family_details"  :  [ "Mary", "Robert.J" , 10 ],
    "streetname"      :  null,
    "travelldtoIndia" :  undefined
};
console.log(customer_2.name);            // Here name is the property

/*Note : Time to remind the property of the length
  Example : var name       = "John";
            var namelength =  name.length;  Here length is the property
*/

// Example 3 :
var customerID = 1;
var customer_3 = {
                    1 : "Peter.Jr"
                 }
console.log(customer_3[customerID]);




/******************How to use the function in the object **************/

/* I already practiced upto yesterday regaring the function and string. 
   
My question is here :
   How i can use the return function in the object ?
*/

// Example 5 :
var customer_5 =  {
                    "name" : "John"
                  };

//Declaration
function getCustomerName(){
                            return "John smith";
                          }

// Example 6 :
var customer_1  = {
                    "name" : getCustomerName()
                  };

var customer_name = customer_1["name"];   // while i am access or call the name property its taking the value from getCustomerName()
var customer_name = customer_1.name;     // while i am access or call the name property its taking the value from getCustomerName()

console.log(customer_name);




/******* How to modify the value of the object ********/

//From Example 2 : 
var customer_2 =  {
    "name"            : "Clerk",
    "price"           :  100.09,
    "location"        : "London",
    "isAdmin"         :  true,
    "family_details"  :  [ "Mary", "Robert.J" , 10 ],
    "streetname"      :  null,
    "travelldtoIndia" :  undefined
};
console.log(customer_2.name);            // Here "name" is the property key.
                                         // We gets the output by calling the property key.


customer_2.name = "Clerk.Jr";
console.log(customer_2.name);            // Now name of the customer_2 is the 'Clerk.Jr'


customer_2.location = "Washington";
console.log(customer_2.location);        // Now location of the customer_2 is the 'Washington'


console.log(customer_2);                 // For cross-check of the customer_2 object.





/*******How to Add new property to the object********/

// From Example 3 : 
var customer_3 =  {
    "name"            : "Clerk",
    "price"           :  100.09,
    "location"        : "London",
    "isAdmin"         :  true,
    "family_details"  :  {
                           "spouse_name" :  "Mary",
                           "kid_name"    :   "Robert.J",
                           "kid_age"     :   10
                         },
    "streetname"      :  null,
    "travelldtoIndia" :  undefined
 };
console.log("before adding the new property customer_3", customer_3);

// customer_3["dateofbirth"]  =  "10-10-1967";
// customer_3["habits"]       =  ["Watching Movies", "Playing Tennis" , "Travelling"];
// console.log("After adding the new property customer_3" , customer_3);


customer_3.dateofbirth  =  "10-10-1967";
customer_3.habits       =  ["Watching Movies", "Playing Tennis" , "Travelling"];

console.log("After adding the new property customer_3" , customer_3);





/*******How to delete a property from the object********/

//Example - 6
var customer_6 =  {
    "name"            : "Clerk",
    "price"           :  100.09,
    "location"        : "London",
    "isAdmin"         :  true,
    "family_details"  :  [ "Mary", "Robert.J" , 10 ],
    "streetname"      :  null,
    "travelldtoIndia" :  undefined
};

delete customer_6.streetname;
console.log("Deleting streetname from the customer_6 variable" , customer_6); 
//console.log("%cDeleting streetname from the customer_6 variable" , 'color:white;background:green' , customer_6);   

delete customer_6.travelldtoIndia;
console.log("Deleting travelldtoIndia from the customer_6 variable" , customer_6);






