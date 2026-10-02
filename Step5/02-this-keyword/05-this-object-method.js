/*
When a regular method is called as author.getBookDetails(),
this refers to author.
*/

const author = {
    name: "Rabindranath Tagore",
    dateOfBirth: "May 7, 1861",

    books: [
        "Gitanjali",
        "The Home and the World",
        "Gora"
    ],

    achievements: [
        "Nobel Prize in Literature",
        "Author of Jana Gana Mana"
    ],

    getBookDetails: function () {
        console.log("Object this:", this);
        console.log("Is this author?", this === author); // true

        console.log("Author Name:", this.name);
        console.log("Date of Birth:", this.dateOfBirth);
        console.log("Books:", this.books);
        console.log("Achievements:", this.achievements);
        console.log("Books Listed:", this.books.length); // 3
    }
};

author.getBookDetails();