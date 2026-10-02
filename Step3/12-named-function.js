// A named function has a name after the function keyword.
// Call the function using its name followed by parentheses.

function showBookName() {
    let bookName = "Harry Potter series";
    console.log("Book Name:", bookName);
}

showBookName();

// A named function can also accept parameters.

function showBookDetails(bookName, authorName, dateOfBirth) {
    console.log("Book Name:", bookName);
    console.log("Author Name:", authorName);
    console.log("Author's Date of Birth:", dateOfBirth);
}

showBookDetails(
    "Gitanjali",
    "Rabindranath Tagore",
    "May 7, 1861"
);