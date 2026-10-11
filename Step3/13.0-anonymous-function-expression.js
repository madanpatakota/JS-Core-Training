// An anonymous function has no name after the function keyword.
// Here, we store the function in a variable.
// This is called a function expression.

// Example 1: Without parameters
var showBookName = function () {
    let bookName = "Harry Potter series";
    console.log("Book Name:", bookName);
};

// Call the function using the variable name.
showBookName();

// Example 2: With parameters
var showBookDetails = function (bookName, authorName, dateOfBirth) {
    console.log("Book Name:", bookName);
    console.log("Author Name:", authorName);
    console.log("Author's Date of Birth:", dateOfBirth);
};

showBookDetails(
    "Gitanjali",
    "Rabindranath Tagore",
    "May 7, 1861"
);

// Example 3: Returning a value
var getBookDetails = function (bookName, authorName) {
    return "Book Name: " + bookName + " | Author Name: " + authorName;
};

let bookMessage = getBookDetails("Gitanjali", "Rabindranath Tagore");

console.log("Returned Value:", bookMessage);

// Assigning the function does not execute its body.
// Adding () calls the function.