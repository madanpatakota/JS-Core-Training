// Parameters are the names written in the function definition.
// Arguments are the actual values passed when calling the function.

function showBookDetails(bookName, authorName, dateOfBirth, publishedDate) {
    console.log("Book Name:", bookName);
    console.log("Author:", authorName);
    console.log("Author's Date of Birth:", dateOfBirth);
    console.log("Published Year:", publishedDate);
}

// Passing four arguments to four parameters
showBookDetails(
    "Gitanjali",
    "Rabindranath Tagore",
    "May 7, 1861",
    1910
);