// Arrow functions use => instead of the function keyword.

// --------------------------------------------------
// Example 1: Without parameters
// --------------------------------------------------

// Regular function:
// function showAuthorName() {
//     console.log("Author Name: Rabindranath Tagore");
// }

// Arrow function:
let showAuthorName = () => {
    console.log("Author Name: Rabindranath Tagore");
};

showAuthorName();


// --------------------------------------------------
// Example 2: With multiple parameters
// --------------------------------------------------

let showAuthorDetails = (
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

showAuthorDetails(
    "Rabindranath Tagore",
    "May 7, 1861",
    "The Gardener",
    1913
);


// --------------------------------------------------
// Example 3: With an explicit return value
// --------------------------------------------------

// When using a block {}, write return to send back a value.

let getAuthorDetails = (
    authorName,
    dateOfBirth,
    bookName,
    publishedYear
) => {
    return `Author Details: ${authorName} | ${dateOfBirth} | ${bookName} | ${publishedYear}`;
};

// Store the returned string.
let authorDetails = getAuthorDetails(
    "Munshi Premchand",
    "July 31, 1880",
    "Nirmala",
    1927
);

console.log(authorDetails);


// --------------------------------------------------
// Example 4: Short form with an implicit return
// --------------------------------------------------

// For a single expression, we can omit {} and return.

let getAuthorMessage = (authorName) => `Author Name: ${authorName}`;

console.log(getAuthorMessage("Rabindranath Tagore"));


// --------------------------------------------------
// Example 5: With two number parameters
// --------------------------------------------------

let sayHello = (firstNumber, secondNumber) => {
    console.log("Hello!");
    console.log("First Number:", firstNumber);
    console.log("Second Number:", secondNumber);
};

sayHello(10, 20);


// --------------------------------------------------
// Example 6: Arrow function as a callback
// --------------------------------------------------

// setTimeout receives the arrow function as an argument.
// 3000 milliseconds = 3 seconds.

console.log("Before setTimeout");

setTimeout(() => {
    console.log("Test");
    console.log("The timer callback has executed.");
}, 3000);

console.log("After setTimeout");

// Output order:
// Before setTimeout
// After setTimeout
// Test
// The timer callback has executed.