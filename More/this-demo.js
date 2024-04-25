/*
   this : 'this' is a keyword in Javascript which refers the current execution context(scope)
   PPT : 
   The way you can use the 'this' keyword

   - global context with this
     When used in the global scope (outside of any function), this refers to the global object
   
   - this from function context
     When used within a function, the value of this depends on how the function is called

   - this from constructor function context 
      When used within a constructor function (a function invoked with new),
      this refers to the newly created instance of the object.


   - this from object context
      When used within a method (function) that is a property of an object, this refers to the object itself..
     

   - this from function of object
     When used within a method (function) that is a property of an object, this refers to the object itself..
     

   - this from arrow function
     Arrow functions do not have their own this context. Instead, 
     Instead, they look up the value of this from the scope in which they are defined, .



   - bind and this 

   

*/


/* ****************************global Scope***********************/
console.log(this);  // Here gives the context of global scope. i.e. window





function func_a() {
  console.log(this);
}
//func_a(); // Calling general function

//new func_a() //calling function by new operator . Say constructor function // In the constructor function this refers to the scope of the function

var obj_1 = {
  cName: "Peter",
  log: console.log("this refers to ", this),
};

//Note : by default this refers the window object
//obj_1.log;   // calling log property

var value1 = 10;
var value2 = 20;

var isSame = value1 == value2; // Keep in mind == symbol use ful for compare the values wheather same or not.
console.log(isSame);

//Implementing normal function
var obj_2 = {
  cName: "Peter",
  log: function () {
    console.log("obj2 is", obj_2);
    console.log("this refers to ", this);
    console.log(obj_2 == this);
  },
};
obj_2.log(); // calling log log function



//Implementing in arrow function
const obj_3 = {
  name: "John",
  details: () => {
    console.log(this.name + " " + " working in India");
  }
};
obj.details(); // Output: Hello, John

const boundDetails = obj_3.details.bind(obj_3);
/*  bind() is used to create a new function with a specific this value, allowing you to control the context in which the function is executed. 

In this case, it ensures that this inside the 'details' function always refers to the obj_3 object, 
regardless of how or where the function is called.
*/






//Implementing  callback function
// var obj_3 = {
//   cName: "Peter",
//   Details: ["Software Engineer", "US", "50"],
//   getProducts: function () {
//     this.Details.forEach(function (detail) {
//       console.log(this.cName, detail);
//     }, this);
//   },
// };

//obj_3.getProducts(); // calling log log function

//[{"Peter" : "Software Engineer"} , {"Peter" : "Product A"}]
