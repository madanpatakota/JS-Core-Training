// Default parameter: author = "Unknown"
function showBookDetails(bookName, author = "Unknown") {
    console.log("📚 Book Name:", bookName);
    console.log("✍️ Author:", author);
}

// Passing both arguments
showBookDetails("Pride and Prejudice", "Jane Austen");
// 📚 Book Name: Pride and Prejudice
// ✍️ Author: Jane Austen

// Skipping the author argument
showBookDetails("JavaScript Basics");
// 📚 Book Name: JavaScript Basics
// ✍️ Author: Unknown