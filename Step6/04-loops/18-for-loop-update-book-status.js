// This example matches your slide:
// Mark every book as read using a loop.

// Assume the reader has completed all these books.
let booksList = [
    { bookName: "English", isRead: false },
    { bookName: "Mathematics", isRead: false },
    { bookName: "Physics", isRead: false },
    { bookName: "Chemistry", isRead: false },
    { bookName: "History", isRead: false },
    { bookName: "Literature", isRead: false },
    { bookName: "Geography", isRead: false }
];

for (
    let bookIndex = 0;
    bookIndex < booksList.length;
    bookIndex++
) {
    // Update the current book object.
    booksList[bookIndex].isRead = true;

    console.log(
        "Book:", booksList[bookIndex].bookName,
        "| Read:", booksList[bookIndex].isRead
    );
}

// Output:
// Book: English | Read: true
// Book: Mathematics | Read: true
// Book: Physics | Read: true
// Book: Chemistry | Read: true
// Book: History | Read: true
// Book: Literature | Read: true
// Book: Geography | Read: true

// The loop updates the stored status of each book.