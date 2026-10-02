/*
At the top level of a classic browser script,
this refers to window.
*/

var authors = ["Rabindranath Tagore", "J. K. Rowling"];
var books = ["Gitanjali", "Harry Potter"];

console.log("Global this:", this);
console.log("Is this window?", this === window); // true

// Top-level var declarations become properties of window
console.log("Authors:", this.authors);
console.log("Books:", this.books);

// Add a method to the global object
this.getBookDetails = function () {
    return this.books;
};

console.log("Returned Books:", this.getBookDetails());

// Top-level let and const do not become window properties
let trainingCompany = "MISARD";

console.log("Company:", trainingCompany); // MISARD
console.log("Window Property:", window.trainingCompany); // undefined

// In a JavaScript module, top-level this is undefined.