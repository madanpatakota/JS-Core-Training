// A constructor function is used to create objects.
// Its name starts with a capital letter by convention.

function Car(carName, color) {
    // When called with new, this refers to the new object.
    this.carName = carName;
    this.color = color;

    console.log("🚗 Car object created");
}

// Create two separate objects using the same constructor.
const carOne = new Car("Car 1", "Red");
const carTwo = new Car("Car 2", "Blue");

// Inspect the objects.
console.log("Car One:", carOne);
console.log("Car Two:", carTwo);

// Read each object's properties.
console.log("Car One Name:", carOne.carName); // Car 1
console.log("Car One Color:", carOne.color);  // Red

console.log("Car Two Name:", carTwo.carName); // Car 2
console.log("Car Two Color:", carTwo.color);  // Blue

console.log("Type of Car One:", typeof carOne); // object

// Each object has its own properties.


//NOw i want to add a common method that is startEngine to the Each Car . then how to do . here the answer is Protototype

// So in next sesssion lets discuss about the prototype..
// Next, we will add a shared method using Car.prototype.