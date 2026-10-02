// Arrays also have properties and methods.

const books = [
    "Gitanjali",
    "The Home and the World",
    "Gora"
];

// length is a property: no parentheses
console.log("Total Books:", books.length); // 3

// Access an element using its index
console.log("First Book:", books[0]); // Gitanjali

// pop() is a method: it removes and returns the last element
const removedBook = books.pop();

console.log("Removed Book:", removedBook); // Gora
console.log("Remaining Books:", books);
console.log("Updated Count:", books.length); // 2

// push() adds an element and returns the new length
const newLength = books.push("English");

console.log("New Count:", newLength); // 3
console.log("Updated Books:", books);

// reverse() changes the order of the original array
books.reverse();
console.log("Reversed Books:", books);

// Property: books.length
// Method: books.pop()