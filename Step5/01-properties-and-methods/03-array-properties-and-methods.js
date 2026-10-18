// An array containing book objects.
const books = [
    {
        title: "Gitanjali",
        authorName: "Rabindranath Tagore",
        publishedYear: 1910
    },
    {
        title: "The Home and the World",
        authorName: "Rabindranath Tagore",
        publishedYear: 1916
    },
    {
        title: "Gora",
        authorName: "Rabindranath Tagore",
        publishedYear: 1910
    }
];

// length is a property: no parentheses.
console.log("Total Books:", books.length); // 3

// Access the first object using its index.
console.log("First Book Object:", books[0]);

// Read properties from the first book object.
console.log("First Book Title:", books[0].title);
console.log("Author Name:", books[0].authorName);
console.log("Published Year:", books[0].publishedYear);

// pop() removes and returns the last book object.
const removedBook = books.pop();

console.log("Removed Book:", removedBook);
console.log("Removed Book Title:", removedBook.title); // Gora
console.log("Remaining Books:", books);
console.log("Updated Count:", books.length); // 2

// push() adds a book object and returns the new array length.
const newLength = books.push({
    title: "The Post Office",
    authorName: "Rabindranath Tagore",
    publishedYear: 1912
});

console.log("New Count:", newLength); // 3
console.log("Updated Books:", books);

// reverse() reverses the objects in the original array.
books.reverse();

console.log("Reversed Books:", books);
console.log("First Book After Reverse:", books[0].title);
// The Post Office

/*
books.length       → Array property
books[0].title     → Property of a book object
books.pop()        → Array method without arguments
books.push({...})  → Array method with an argument
books.reverse()    → Array method without arguments
*/