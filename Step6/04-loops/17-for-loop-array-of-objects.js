// Each array element is an object containing book details.

let booksList = [
    { bookPositionInBox: 1, bookName: "English" },
    { bookPositionInBox: 2, bookName: "Mathematics" },
    { bookPositionInBox: 3, bookName: "Physics" },
    { bookPositionInBox: 4, bookName: "Chemistry" },
    { bookPositionInBox: 5, bookName: "History" },
    { bookPositionInBox: 6, bookName: "Literature" },
    { bookPositionInBox: 7, bookName: "Geography" }
];

for (
    let bookIndex = 0;
    bookIndex < booksList.length;
    bookIndex++
) {
    let book = booksList[bookIndex];

    console.log(
        "Position:", book.bookPositionInBox,
        "| Book:", book.bookName
    );

    if (book.bookName === "English") {
        console.log("English is in your basket");
    }

    if (book.bookName === "Mathematics") {
        console.log("Mathematics is in your basket");
    }

    if (book.bookName === "History") {
        console.log("History is in your basket");
    }
}

// The loop displays all seven books.
// Extra messages appear for English, Mathematics and History.

// Array indexes start at 0.
// Our bookPositionInBox values start at 1.