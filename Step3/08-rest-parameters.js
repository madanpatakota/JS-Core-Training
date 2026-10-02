// A rest parameter collects the remaining arguments into an array.
// Write three dots (...) before the parameter name.
// A rest parameter must be the last parameter.

function showAuthorBooks(authorName, ...bookNames) {
    console.log("Author:", authorName);
    console.log("Book Names:", bookNames);
    console.log("Total Books:", bookNames.length);
}

// Example 1: Passing one book
showAuthorBooks(
    "Rabindranath Tagore",
    "Gitanjali"
);

// Example 2: Passing three books
showAuthorBooks(
    "Rabindranath Tagore",
    "Gitanjali",
    "The Home and the World",
    "The Gardener"
);

// Example 3: Passing no books
// The rest parameter receives an empty array [].
showAuthorBooks("Rabindranath Tagore");