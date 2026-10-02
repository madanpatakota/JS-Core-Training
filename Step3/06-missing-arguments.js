// JavaScript allows us to call a function with fewer arguments.
// A parameter without an argument receives undefined.

function showBookDetails(bookName, authorName, dateOfBirth, publishedDate) {
    console.log("Book Name:", bookName);
    console.log("Author:", authorName);
    console.log("Author's Date of Birth:", dateOfBirth);
    console.log("Published Year:", publishedDate);
}

// The fourth argument is missing.
showBookDetails(
    "Gitanjali",
    "Rabindranath Tagore",
    "May 7, 1861"
);

// Published Year: undefined