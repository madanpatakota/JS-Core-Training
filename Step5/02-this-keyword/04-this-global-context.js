/*
At the top level of a classic browser script,
this refers to window.
*/

var authors = ["Rabindranath Tagore", "J. K. Rowling"];
var books = ["Gitanjali", "Harry Potter"];

console.log("Authors:", authors);
console.log("Books:", books);

console.log("Global this:", this);

// Top-level var declarations become properties of window
console.log("window - Authors:", window.authors);
console.log("window - Books:", window.books);

console.log("Is this window?", this === window); // true

// Top-level var declarations become properties of window
console.log("this - Authors:", this.authors);
console.log("this - Books:", this.books);

this.AnotherBooks = ["Wings of Fire",  "The Jungle Book"  , "The Hobbit"];

// Add a method to the global object
this.getBookDetails = function(){
    return ["Gitanjali", "Harry Potter" , "Wings of Fire",  "The Jungle Book"  , "The Hobbit"];
};
console.log("Returned Books:", this.getBookDetails());

// Add a method to the global object
this.getAuthorsList = function(){
    return this.authors;
};
console.log("Returned Books:", this.getAuthorsList());



// Top-level let and const do not become window properties
let   subject1 = "JS";
const subject2 = ".net";

console.log("Subject:", subject1); // JS

// In a JavaScript module, top-level this is undefined.
console.log("Window Property:", window.subject1); // undefined