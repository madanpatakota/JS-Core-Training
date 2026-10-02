/*
An arrow function does not have its own this.
It uses this from the surrounding scope.

Here, the surrounding scope is the top level
of a classic browser script, so this is window.
*/

const author = {
    name: "Rabindranath Tagore",
    dateOfBirth: "May 7, 1861",
    books: ["Gitanjali", "The Home and the World", "Gora"],

    getBookDetails: () => {
        console.log("Arrow this:", this);
        console.log("Is this window?", this === window); // true
        console.log("Is this author?", this === author); // false

        // Reads window.dateOfBirth, not author.dateOfBirth
        console.log("Date from window:", this.dateOfBirth);
    }
};

author.getBookDetails();

// On a fresh page with no global dateOfBirth property,
// "Date from window" displays undefined.

// Accessing the object's property directly still works
console.log("Author Date:", author.dateOfBirth); // May 7, 1861