// ==================================================
// Example 1: Without Parameters
// ==================================================

// Regular Function
function showAuthorNameRegular() {
    console.log("Author Name: Rabindranath Tagore");
}

// Arrow Function
const showAuthorNameArrow = () => {
    console.log("Author Name: Rabindranath Tagore");
};

showAuthorNameRegular();
showAuthorNameArrow();


// ==================================================
// Example 2: With Multiple Parameters
// ==================================================

// Regular Function
function showAuthorDetailsRegular(
    authorName,
    dateOfBirth,
    bookName,
    publishedYear
) {
    console.log("Author Name:", authorName);
    console.log("Date of Birth:", dateOfBirth);
    console.log("Book Name:", bookName);
    console.log("Published Year:", publishedYear);
}

// Arrow Function
const showAuthorDetailsArrow = (
    authorName,
    dateOfBirth,
    bookName,
    publishedYear
) => {
    console.log("Author Name:", authorName);
    console.log("Date of Birth:", dateOfBirth);
    console.log("Book Name:", bookName);
    console.log("Published Year:", publishedYear);
};

showAuthorDetailsRegular(
    "Rabindranath Tagore",
    "May 7, 1861",
    "The Gardener",
    1913
);

showAuthorDetailsArrow(
    "Rabindranath Tagore",
    "May 7, 1861",
    "The Gardener",
    1913
);


// ==================================================
// Example 3: Explicit Return Value
// ==================================================

// Regular Function
function getAuthorDetailsRegular(
    authorName,
    dateOfBirth,
    bookName,
    publishedYear
) {
    return `Author Details: ${authorName} | ${dateOfBirth} | ${bookName} | ${publishedYear}`;
}

// Arrow Function
const getAuthorDetailsArrow = (
    authorName,
    dateOfBirth,
    bookName,
    publishedYear
) => {
    return `Author Details: ${authorName} | ${dateOfBirth} | ${bookName} | ${publishedYear}`;
};

console.log(
    getAuthorDetailsRegular(
        "Munshi Premchand",
        "July 31, 1880",
        "Nirmala",
        1927
    )
);

console.log(
    getAuthorDetailsArrow(
        "Munshi Premchand",
        "July 31, 1880",
        "Nirmala",
        1927
    )
);


// ==================================================
// Example 4: Short Form / Implicit Return
// ==================================================

// Regular Function
function getAuthorMessageRegular(authorName) {
    return `Author Name: ${authorName}`;
}

// Arrow Function
const getAuthorMessageArrow = authorName =>
    `Author Name: ${authorName}`;

console.log(
    getAuthorMessageRegular("Rabindranath Tagore")
);

console.log(
    getAuthorMessageArrow("Rabindranath Tagore")
);


// ==================================================
// Example 5: Two Number Parameters
// ==================================================

// Regular Function
function sayHelloRegular(firstNumber, secondNumber) {
    console.log("Hello!");
    console.log("First Number:", firstNumber);
    console.log("Second Number:", secondNumber);
}

// Arrow Function
const sayHelloArrow = (firstNumber, secondNumber) => {
    console.log("Hello!");
    console.log("First Number:", firstNumber);
    console.log("Second Number:", secondNumber);
};

sayHelloRegular(10, 20);
sayHelloArrow(10, 20);


// ==================================================
// Example 6: Callback Function with setTimeout
// ==================================================

console.log("Before setTimeout");

// Regular Function Callback
setTimeout(function () {
    console.log("Regular Function Callback");
}, 3000);

// Arrow Function Callback
setTimeout(() => {
    console.log("Arrow Function Callback");
}, 3000);

console.log("After setTimeout");