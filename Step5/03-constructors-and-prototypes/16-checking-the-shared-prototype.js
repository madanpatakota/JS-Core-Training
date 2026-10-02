function Car(brandName, modelName) {
    this.brand = brandName;
    this.model = modelName;
}

Car.prototype.startEngine = function () {
    console.log(this.brand + " " + this.model + " engine started.");
};

var carOne = new Car("Toyota", "Camry");
var carTwo = new Car("Honda", "Civic");

// Each object has its own properties.
console.log("First Car Brand:", carOne.brand); // Toyota
console.log("Second Car Brand:", carTwo.brand); // Honda

// Both objects access the same function.
console.log(
    "Do Both Cars Share the Same Method?",
    carOne.startEngine === carTwo.startEngine
); // true

// hasOwnProperty checks whether a property
// belongs directly to the object.
console.log(
    "Does Car One Have Its Own Brand?",
    carOne.hasOwnProperty("brand")
); // true

console.log(
    "Does Car One Have Its Own startEngine Method?",
    carOne.hasOwnProperty("startEngine")
); // false

// startEngine is available through Car.prototype.
console.log(
    "Is Car.prototype the Prototype of Car One?",
    Object.getPrototypeOf(carOne) === Car.prototype
); // true

carOne.startEngine();
carTwo.startEngine();

// Summary:
// Constructor: Stores properties on each new object.
// Prototype: Stores methods that objects can share.
// this: Refers to the car when called as car.startEngine().