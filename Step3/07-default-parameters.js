// A default parameter provides a value when an argument is missing
// or when undefined is passed.

function showBookDetails(
    bookName,
    authorName,
    dateOfBirth = "DOB not mentioned",
    publishedDate = "Published date not available"
) {
    console.log("Book Name:", bookName);
    console.log("Author:", authorName);
    console.log("Author's Date of Birth:", dateOfBirth);
    console.log("Published Date:", publishedDate);
}

// Example 1: Missing arguments use the default values.
console.log("Example 1: Using default values");

showBookDetails("Gitanjali", "Rabindranath Tagore");

// Example 2: Supplied arguments replace the default values.
console.log("Example 2: Providing all values");

showBookDetails(
    "Gitanjali",
    "Rabindranath Tagore",
    "May 7, 1861",
    1910
);

// Example 3: undefined also uses the default value.
console.log("Example 3: Passing undefined");

showBookDetails(
    "Gitanjali",
    "Rabindranath Tagore",
    undefined,
    1910
);