// You can tell this thing after the function

// Store a function in a variable
var showBookName = function () {
    console.log("Harry Potter series");
};

// Display the function without running it
console.log(showBookName);

// Inspect the function's properties in Chrome Console
console.dir(showBookName);

// typeof identifies it as a function
console.log("Type:", typeof showBookName); // function

// Add () to call the function and run its code
showBookName(); // Harry Potter series

// Functions can have properties because they are objects
showBookName.description = "Displays the book name";
console.log(showBookName.description);