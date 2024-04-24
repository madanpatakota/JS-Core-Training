/*members are 2 types in data types

   1.properties   : represents the charcterstics of an object . can be primitive , composite types
   2.Methods      : represents the behaviour of the object that object can perform
  
*/


var bank = {
    Name : "HDFC",
    deposit : function(){
         console.log("HDFC Deposit system is working")
    }
}

// bank.Name       //Property
// bank.deposit()  //Method  -> Define the property with a function then you can say method.

//Notes bank is a object you are calling the name and deposit members of the object


//string
var greetings = "Say Hello";
greetings.length  // property
greetings.toUpperCase() //method
greetings.toLowerCase() //method


//Array 
var names = ["PersonA" , "PersonB" , "PersonC"];
names.length   // property
names.push("PersonD")  // Parameter is string
console.log(names);

names.shift() //method --> first remove the value , No parameter
console.log(names);

const locations = ["Bangolore" , "Hyderabad" , "Chennai"];

// Find the index of 'orange'
const index = locations.indexOf('Bangolore');
console.log(index); // Output: 0

const numbers = [1, 2, 3, 4, 5];


// Find the first element greater than 3

//picking every value checking and taking | returning
//By anonmous function
const result1 = numbers.find(function(number){ return number > 3});
console.log(result); // Output: 4 // return first value in the list


//By arrow function
// Find the first element greater than 3
const result2 = numbers.find(element => element > 3);
console.log(result); // Output: 4

//By arrow function
// Find the first element greater than 3
const result3 = numbers.filter(element => element > 3);
console.log(result3); // Output: [4,5]



//NOte : 
// 1. weather member is expecting the parameter or not
// 2. How many parameters its expecting
// 3. Whats return type of that memeber
// 4. Every method member have the return the value.





