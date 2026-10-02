/*
A useful arrow-function example:

The regular method receives author as this.
The arrow inside it uses that same this.
*/

const author = {
    name: "Rabindranath Tagore",
    books: ["Gitanjali", "The Home and the World", "Gora"],

    getBookDetails: function () {
        console.log("Regular Method this:", this);

        const displayBooks = () => {
            console.log("Arrow this:", this);
            console.log("Is this author?", this === author); // true
            console.log("Author:", this.name);
            console.log("Books:", this.books);
            console.log("Books Listed:", this.books.length); // 3
        };

        displayBooks();
    }
};

author.getBookDetails();

// Regular method: this comes from author.getBookDetails().
// Inner arrow: this comes from the enclosing regular method.