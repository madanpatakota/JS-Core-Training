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

/*Note : before you are going to start tell about the Window-demo.js file*/

/* ****************************global Scope***********************/
console.log("this from global level  is ", this); // Here gives the context of global scope. i.e. window

function func_a() {
  console.log("this is here in func_a", this);
}
func_a(); // Calling general function and will give the ouput is window object

new func_a(); //calling function by new operator . Say constructor function // In the constructor function this refers|returns to the scope of the function

var obj_1 = {
  cName: "Peter",
  log: function () {
    console.log("Obj1 : function - this refers in obj_1 is", this);
  },
};

obj_1.log(); // Output: this refers in obj_1 is 1 { cName: 'Peter', log: f }

var obj_2 = {
  cName: "Peter",
  log: () => {
    console.log("Obj_2 : Arrow - this refers in obj_2 is", this);  
  },
};

obj_2.log(); // Output: this refers in obj_2 is window //In Arrow functions this refers to the global scope context by default . i.e. window

var value1 = 10;
var value2 = 20;

var isSame = value1 == value2; // Keep in mind == symbol use ful for compare the values wheather same or not.
console.log(isSame);

//Implementing normal function
var obj_3 = {
  cName: "Peter",
  log: function () {
    console.log("obj3: function", obj_3);
    console.log("obj3: funciton - this refers", this);
    console.log(obj_3 == this);
  },
};
obj_3.log(); // calling log log function

//Implementing in arrow function

var name = "Madan";
var obj_4 = {
  name: "John",
  details: (() => {
    console.log("obj_4 - Arrow : " + this.name + " " + " working in India");
  }).bind(this) // Once you bind with this then 'this' refers the global scope. i.e. window
};
obj_4.details(); // Output: "Madan , is working in India"

//In arrow function this would't allow to give the current this context....

//var boundDetails = obj_4.details.bind(obj_4);
//console.log("By using the bind ", boundDetails());

var name_1 = "Madan_1";
var obj_5 = {
  name: "John_1",
  details:
    (function () {
      console.log("obj_5 - function : " + this.name + " " + " working in India");
    }).bind(this)
};

obj_5.details();

/*  bind() is used to create a new function with a specific this value, allowing you to control the context in which the function is executed. 
In this case, it ensures that this inside the 'details' function always refers to the obj_5 object, 
regardless of how or where the function is called.*/

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
