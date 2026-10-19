

// do...while: runs the body, then checks the condition.
let bookNumber = 1;

do {
    console.log("📚 Reading book:", bookNumber);
    bookNumber = bookNumber + 1;
} while (bookNumber <= 3);
// Output: 1, 2, 3







let availableBooks = 3;

// Run the body first, then check the condition.
do {
    console.log("📚 Book issued successfully");
    availableBooks = availableBooks -1;
    console.log("Remaining Books:", availableBooks);
} while (availableBooks > 0);

console.log("❌ No books available");