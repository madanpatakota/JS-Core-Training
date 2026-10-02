/*
An object can contain data properties and methods.

A data property stores information.
A method is a property whose value is a function.

Read a property using its name.
Call a method using parentheses ().
*/

const car = {
    brand: "Toyota",
    colour: "Red",

    drive: function () {
        console.log("The car is driving");
    },

    stop: function () {
        console.log("The car has stopped");
    }
};

// Accessing properties
console.log("Car Brand:", car.brand);   // Toyota
console.log("Car Colour:", car.colour); // Red

// Calling methods
car.drive(); // The car is driving
car.stop();  // The car has stopped

// Checking the types of members
console.log("Brand Type:", typeof car.brand); // string
console.log("Drive Type:", typeof car.drive); // function

// Updating a property
car.colour = "Blue";
console.log("Updated Colour:", car.colour); // Blue

// Adding a property
car.model = "Camry";
console.log("Car Model:", car.model); // Camry

// Bracket notation also works
console.log("Car Brand:", car["brand"]);
car["drive"]();

// car.drive refers to the function.
// car.drive() executes the function.