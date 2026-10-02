// Use a for loop to access each array element by its index.

let booksList = ["English", "Mathematics", "Physics"];

// Array indexes start at 0.
// booksList[0] is "English".
// booksList.length is 3.

console.log("Total Books:", booksList.length);

for (
    let bookIndex = 0;
    bookIndex < booksList.length;
    bookIndex++
) {
    console.log("Book Index:", bookIndex);
    console.log("Book Name:", booksList[bookIndex]);
}

// Output:
// Total Books: 3
// Book Index: 0
// Book Name: English
// Book Index: 1
// Book Name: Mathematics
// Book Index: 2
// Book Name: Physics

// Use booksList.length so the loop adjusts when books are added.
// The last valid index is booksList.length - 1.