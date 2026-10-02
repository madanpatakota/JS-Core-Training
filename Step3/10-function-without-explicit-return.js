// This function performs an action: displaying book details.
// It does not contain a return statement.
// JavaScript automatically returns undefined.

function showBookDetails(bookName, authorName) {
    let bookDetails =
        "Book Name: " + bookName + " | Author Name: " + authorName;

    console.log(bookDetails);
}

// Example 1: Call the function to display the details.
showBookDetails("Gitanjali", "Rabindranath Tagore");

// Example 2: Store the function's returned value.
let bookResult = showBookDetails("Gitanjali", "Rabindranath Tagore");

console.log("Returned Value:", bookResult); // undefined

// console.log() displays information.
// It does not return that information from our function.