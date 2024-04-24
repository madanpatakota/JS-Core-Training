
/********************************Object with functions ****************/

//Declaration
function getCustomerExactInfo(key){
    var customer =  {
        "name"            : "Clerk",
        "price"           :  100.09,
        "location"        : "London",
        "isAdmin"         :  true,
        "family_details"  :  [ "Mary", "Robert.J" , 10 ],
        "streetname"      :  null,
        "travelldtoIndia" :  undefined
    };

    var customerKeyValue = customer[key];
    return customerKeyValue;
}

/****Calling the function***/
//First approach
getCustomerExactInfo("price");

//Calling the function
//Second approach
var key = "price";
getCustomerExactInfo(key);




/***************** . Do't explain  REMOVED FROM THE CLASS - Start -  *********************/
/************** How to check if property is available or not in the object *****/
              //A : hasownproperty

var customer =  {
    "name"            : "Clerk",
    "price"           :  100.09,
    "location"        : "London",
    "isAdmin"         :  true,
    "family details"  :  [ "Mary", "Robert.J" , 10 ],
    "streetname"      :  null,
    "travelldtoIndia" :  undefined
};
/***************** . Do't explain  REMOVED FROM THE CLASS - End -  *********************/


/********   Creating the multi-objects in the array ***********/

var customersList = [
    {
        "name"            : "Clerk",
        "price"           :  100.09,
        "location"        : "London",
        "isAdmin"         :  true,
        "family_details"  :  { 
                                "spousename" : "Mary", 
                                 "kids"      : [ "Robert.J", "smith" ]
                             },               
        "streetname"      :  null,
        "travelldtoIndia" :  undefined,
    },
    {
        "name"            : "Peter.Sr",
        "price"           :  200.57,
        "location"        : "Denmark",
        "isAdmin"         :  false,
        "family_details"  :  { 
                                "spousename" : "Milenda", 
                                "kids"       : [ "Peter.Jr1", "Peter.Jr2" ]
                             },
        "streetname"      :  null,
        "travelldtoIndia" :  "Yes"
    },
]


/************************** How to access the value from the array *******************/

// Task 1 : how to get first customer the familyDetails
var familyDetails = customersList[0].family_details;
console.log(familyDetails);


// Task 2 : how to get kids of the first customer
var kidsDetails = customersList[0].family_details.kids;
console.log(familyDetails);

// Task 3 : how to get first kid from the customer
var firstkidsDetails = customersList[0].family_details.kids[0];
console.log(firstkidsDetails);



// YourTask : How to Add the ages to the kids
/// Practice as much as possible

// Object and array powerful concepts in the JS.
