// Scope chain: JavaScript searches the current scope first,
// then continues through the enclosing scopes.

// Scope 1
{
    let fruitOne = "Apple";

    // Scope 2: inside Scope 1
    {
        let fruitTwo = "Mango";

        // Scope 3: inside Scope 2
        {
            let fruitThree = "Kiwi";

            // Scope 3 can access its own variable
            // and variables from Scope 2 and Scope 1.
            console.log("Scope 3 - Scope 1 Fruit:", fruitOne);
            console.log("Scope 3 - Scope 2 Fruit:", fruitTwo);
            console.log("Scope 3 - Own Fruit:", fruitThree);
        }

        // Scope 2 can access its own variable and Scope 1's variable.
        console.log("Scope 2 - Scope 1 Fruit:", fruitOne);
        console.log("Scope 2 - Own Fruit:", fruitTwo);

        // Scope 2 cannot access Scope 3's variable.
        // console.log(fruitThree); // ReferenceError
    }

    // Scope 1 can access its own variable.
    console.log("Scope 1 - Own Fruit:", fruitOne);

    // Scope 1 cannot access variables from its inner scopes.
    // console.log(fruitTwo);   // ReferenceError
    // console.log(fruitThree); // ReferenceError
}

// All three variables were declared inside blocks.
// They are not accessible here.

// console.log(fruitOne);   // ReferenceError
// console.log(fruitTwo);   // ReferenceError
// console.log(fruitThree); // ReferenceError