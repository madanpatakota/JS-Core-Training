// Object properties and methods without introducing this.
const author = {
    name: "Rabindranath Tagore",
    dateOfBirth: "May 7, 1861",
    books: ["Gitanjali", "The Home and the World", "Gora"],

    // 1. Without parameters and without an explicit return
    displayMessage: function () {
        console.log("Welcome to the author's book collection");
    },

    // 2. Without parameters and with a return value
    getDescription: function () {
        return "This collection contains books by Rabindranath Tagore";
    },

    // 3. With parameters and without an explicit return
    displayBookDetails: function (bookName, publishedYear) {
        console.log("Book Name:", bookName);
        console.log("Published Year:", publishedYear);
    },

    // 4. With parameters and with a return value
    getBookDescription: function (bookName, authorName) {
        return bookName + " was written by " + authorName;
    }
};

// Reading properties
console.log("Author Name:", author.name);
console.log("Date of Birth:", author.dateOfBirth);
console.log("Books:", author.books);

// 1. Without parameters, without an explicit return
author.displayMessage();

// 2. Without parameters, with a return value
const description = author.getDescription();
console.log("Description:", description);

// 3. With parameters, without an explicit return
author.displayBookDetails("Gitanjali", 1910);

// 4. With parameters, with a return value
const bookDescription = author.getBookDescription(
    "Gitanjali",
    author.name
);
console.log("Book Description:", bookDescription);

// Methods without an explicit return return undefined.
const result = author.displayBookDetails("Gora", 1910);
console.log("Returned Value:", result); // undefined

// Property names are case-sensitive.
console.log(author.Name); // undefined