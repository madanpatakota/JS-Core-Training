// A function can return a value using the return keyword.
// Here, the function returns a string.

function getBookDetails(bookName, authorName) {
    let bookDetails =
        "Book Name: " + bookName + " | Author Name: " + authorName;

    return bookDetails;
}

// Example 1: Display the returned value directly.
console.log(getBookDetails("Gitanjali", "Rabindranath Tagore"));

// Example 2: Store the returned value in a variable.
let bookMessage = getBookDetails("Gitanjali", "Rabindranath Tagore");

console.log("Returned Value:", bookMessage);
console.log("Type of Returned Value:", typeof bookMessage); // string