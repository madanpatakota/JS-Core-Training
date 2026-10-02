// A constructor function is used to create objects.
// By convention, its name starts with a capital letter.

function Car() {
    console.log("Creating a car object");

    // When called with new, this refers to the new object.
    console.log("New Object:", this);
}

// Calling the constructor with new
var carOne = new Car();

console.log("Car One:", carOne);
console.log("Type of Car One:", typeof carOne); // object

// The object has no own properties yet.