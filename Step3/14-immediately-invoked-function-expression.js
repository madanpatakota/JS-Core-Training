// IIFE means Immediately Invoked Function Expression.
// It runs immediately when execution reaches it.
// The outer parentheses contain the function expression.
// The final parentheses call the function.

// Example 1: Without parameters
(function () {
    let bookName = "Harry Potter series";
    console.log("Book Name:", bookName);
})();

// Example 2: With a parameter
(function (bookName) {
    console.log("Book Name:", bookName);
})("Harry Potter series");

// Example 3: With multiple parameters
(function (bookName, authorName) {
    console.log("Book Name:", bookName);
    console.log("Author Name:", authorName);
})("Gitanjali", "Rabindranath Tagore");

// No separate function call is needed.