// An object property can store an array
var authorDetails = {
    authorName: "J. K. Rowling",
    bookName: "Harry Potter series",
    characterNames: ["Harry Potter", "Hermione Granger", "Ron Weasley"]
};

console.log("Author Name:", authorDetails.authorName);
console.log("Book Name:", authorDetails.bookName);

// Access the complete array
console.log("Characters:", authorDetails.characterNames);

// Access individual array elements
console.log("First Character:", authorDetails.characterNames[0]);
console.log("Second Character:", authorDetails.characterNames[1]);

// Access using bracket notation
console.log("Third Character:", authorDetails["characterNames"][2]);

// Find the number of elements
console.log("Total Characters:", authorDetails.characterNames.length);

// Add a value to the array
authorDetails.characterNames.push("Albus Dumbledore");
console.log("Updated Characters:", authorDetails.characterNames);