// Combine for...in with an if condition.

let bookDetails = {
    bookName: "Gitanjali",
    bookAuthor: "Rabindranath Tagore",
    bookPrice: 250
};

for (let property in bookDetails) {
    if (property === "bookAuthor") {
        console.log("Author:", bookDetails[property]);
    }

    if (property === "bookPrice") {
        console.log("Price:", bookDetails[property]);
    }
}

// Output:
// Author: Rabindranath Tagore
// Price: 250

// for...of: Gets each value from an iterable.
// for...in: Gets enumerable string property names.