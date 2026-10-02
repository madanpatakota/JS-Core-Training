/*
A function groups statements to perform a task.
Define it using the function keyword, a name, () and {}.
The statements inside run when we call the function.
Call a function using its name followed by ().
*/

// Function definition
function makeCoffee() {
    console.log("Step 1: Boil the water");
    console.log("Step 2: Add coffee powder");
    console.log("Step 3: Add milk and sugar");
    console.log("Step 4: Serve the coffee");
}

console.log("Before calling makeCoffee");

// Function calling
makeCoffee();

console.log("After calling makeCoffee");

// Function definition: Display customer information
function showCustomerDetails() {
    let customerID = 11;
    console.log("Customer ID:", customerID);

    let customerName = "RChandra";
    console.log("Customer Name:", customerName);
}

// Function definition: Display books and authors
function showBookDetails() {
    let bookNames = [
        "Harry Potter series",
        "Pride and Prejudice",
        "The Waves"
    ];
    console.log("Book Names:", bookNames);

    let authorNames = [
        "J. K. Rowling",
        "Jane Austen",
        "Virginia Woolf"
    ];
    console.log("Author Names:", authorNames);

    let authorBirthYears = [1965, 1775, 1882];
    console.log("Author Birth Years:", authorBirthYears);
}

// Call each function
showCustomerDetails();
showBookDetails();

// We can call the same function again without rewriting its statements
makeCoffee();

// Defining a function does not run its statements.
// Calling the function runs its statements.