// The constructor stores properties on each new object.
function Car(carName, color) {
    this.carName = carName;
    this.color = color;
}

// Both cars share this prototype method.
Car.prototype.startEngine = function () {
    // this refers to the car that calls the method.

    console.log("what is `this` ? Here"  , this);
    console.log("🚗 Car Name:", this.carName);
    console.log("🎨 Color:", this.color);
    console.log("⚙️ Engine started");
};

// Create the two cars shown in the slide.
const carOne = new Car("Car 1", "Red");
const carTwo = new Car("Car 2", "Blue");

// this refers to carOne.
carOne.startEngine();

// this refers to carTwo.
carTwo.startEngine();

// Update only Car 1's color.
carOne.color = "White";

console.log("After updating Car 1:");
carOne.startEngine(); // White

console.log("Car 2:");
carTwo.startEngine(); // Blue