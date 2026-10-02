// Example based on your author and books screenshots.
// This example does not introduce this yet.

const author = {
    name: "Rabindranath Tagore",
    dateOfBirth: "May 7, 1861",
    books: ["Gitanjali", "The Home and the World", "Gora"],

    displayMessage: function () {
        console.log("Welcome to the author's book collection");
    },

    getDescription: function () {
        return "This collection contains books by Rabindranath Tagore";
    }
};

// Reading properties
console.log("Author Name:", author.name);
console.log("Date of Birth:", author.dateOfBirth);
console.log("Books:", author.books);

// Calling a method that displays a message
author.displayMessage();

// Calling a method that returns a value
const description = author.getDescription();
console.log("Description:", description);

// A method that only logs returns undefined
const result = author.displayMessage();
console.log("Returned Value:", result); // undefined

// Property names are case-sensitive
console.log(author.Name); // undefined