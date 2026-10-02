/*
A constructor function can initialise new objects.

When called with new, this refers to the new object.
Constructor names conventionally start with a capital letter.
*/

function Author(authorName, booksList) {
    this.name = authorName;
    this.books = booksList;

    console.log("New Object:", this);
}

const authorOne = new Author(
    "Rabindranath Tagore",
    ["Gitanjali", "The Home and the World", "Gora"]
);

const authorTwo = new Author(
    "J. K. Rowling",
    ["Harry Potter"]
);

console.log("First Author:", authorOne.name);
console.log("First Author Books:", authorOne.books);

console.log("Second Author:", authorTwo.name);
console.log("Second Author Books:", authorTwo.books);

console.log("Are these the same object?", authorOne === authorTwo);
// false

// Important: use new for this constructor.
// Author("John", ["English"]); is an ordinary function call.
// It does not create an Author instance.