// Curly braces {} group multiple statements into a code block.
// Statements inside the block run one after another.

console.log("Before the code block");

{
    console.log("Step 1: Boil the water");
    console.log("Step 2: Add coffee powder");
    console.log("Step 3: Add milk and sugar");
    console.log("Step 4: Serve the coffee");
}

console.log("After the code block");

// A standalone block runs automatically when execution reaches it.
// It is not a function and cannot be called by a name.


//-----------------------------------------------------------------------------------------------------------


// Curly braces {} group related statements into a code block.

// Block 1: Customer information
{
    let customerID = 11;
    console.log("Customer ID:", customerID);

    let customerName = "RChandra";
    console.log("Customer Name:", customerName);
}

// Block 2: Books and authors
{
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

// Both blocks run automatically, one after another.
// These are code blocks, not functions.