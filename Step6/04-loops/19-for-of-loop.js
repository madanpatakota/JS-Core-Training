// for...of accesses each value in an iterable,
// such as an array or a string.

/*
Syntax:

for (let item of array) {
    // Use the current item
}
*/

let booksList = [
    { bookPositionInBox: 1, bookName: "English", isRead: false },
    { bookPositionInBox: 2, bookName: "Mathematics", isRead: false },
    { bookPositionInBox: 3, bookName: "Physics", isRead: false },
    { bookPositionInBox: 4, bookName: "Chemistry", isRead: false },
    { bookPositionInBox: 5, bookName: "History", isRead: false },
    { bookPositionInBox: 6, bookName: "Literature", isRead: false },
    { bookPositionInBox: 7, bookName: "Geography", isRead: false }
];

for (let book of booksList) {
    console.log(
        "Position:", book.bookPositionInBox,
        "| Book:", book.bookName
    );

    if (book.bookName === "History") {
        book.isRead = true;
        console.log("History has been marked as read");
    }
}

// Check the updated History book.
console.log("History Read Status:", booksList[4].isRead); // true

// book refers to the current book object.
// Updating book.isRead updates that object in the array.
// No index counter is needed for this loop.