// A prototype allows objects to share methods.

function Car() {
    console.log("Car object created");
}

// Add a method to Car.prototype.
// Use a regular function for this method.
Car.prototype.getCarInfo = function () {
    console.log("Car Brand: Toyota");
    console.log("Car Model: Camry");
};

// Create an object
var carOne = new Car();

// The object can access the method through its prototype.
carOne.getCarInfo();

// Inspect the prototype and its method
console.log("Car Prototype:", Car.prototype);
console.log("Method Type:", typeof Car.prototype.getCarInfo); // function