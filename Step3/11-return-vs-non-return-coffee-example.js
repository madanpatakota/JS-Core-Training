// Example 1: Return a value to the caller.

function getCoffee() {
    let coffee = "One cup of coffee";

    return coffee;
}

let customerCoffee = getCoffee();

console.log("Customer received:", customerCoffee);
// Customer received: One cup of coffee


// Example 2: Perform an action without an explicit return.

function announceCoffeeReady() {
    console.log("Coffee ready! Please collect your order.");
}

announceCoffeeReady();

// Calling the function performs the action.
// Its returned value is undefined.
let announcementResult = announceCoffeeReady();

console.log("Announcement Result:", announcementResult); // undefined


// Difference:
// return sends a value back to the caller.
// console.log() displays a message in the console.