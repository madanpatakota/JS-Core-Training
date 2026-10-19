// while: checks the condition before running the body.
let bookNumber = 1;

while (bookNumber <= 3) {
    console.log("📚 Reading book:", bookNumber);
    bookNumber++;
}
// Output: 1, 2, 3



let availableBooks = 3;

// Check the condition before issuing a book.
while (availableBooks > 0) {
    console.log("📚 Book issued successfully");
    availableBooks--;
    console.log("Remaining Books:", availableBooks);
}

console.log("❌ No books available");