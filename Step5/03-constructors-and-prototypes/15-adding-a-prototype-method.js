// Constructor function
function Car(carName, color) {
    this.carName = carName;
    this.color = color;
}

// Add one shared method to the prototype.
Car.prototype.startEngine = function () {
    console.log("🚗 Car Name:", this.carName);
    console.log("🎨 Color:", this.color);
    console.log("⚙️ Engine started");
};

// Create two separate objects.
const carOne = new Car("Car 1", "Red");
const carTwo = new Car("Car 2", "Blue");

// Both objects access the shared prototype method.
carOne.startEngine();
carTwo.startEngine();

// Both access the same function.
console.log(
    "Same method:",
    carOne.startEngine === carTwo.startEngine
); // true

// Inspect the prototype.
console.log("Car Prototype:", Car.prototype);