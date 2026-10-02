// Parameters let us create cars with different details.

function Car(brandName, modelName, color) {
    // this refers to the new object when called with new.
    this.brand = brandName;
    this.model = modelName;
    this.color = color;
}

// Shared method 1: Display car details
Car.prototype.getCarInfo = function () {
    console.log(
        "Car Details:",
        this.color + " " + this.brand + " " + this.model
    );
};

// Shared method 2: Start the engine
Car.prototype.startEngine = function () {
    console.log(this.brand + " " + this.model + " engine started.");
};

// Shared method 3: Display a driving message
Car.prototype.getDriveInfo = function () {
    console.log(
        "Driving the " +
        this.color + " " +
        this.brand + " " +
        this.model + "."
    );
};

// Create the first car
var carOne = new Car("Toyota", "Camry", "Red");

// Create the second car
var carTwo = new Car("Honda", "Civic", "Blue");

// When called as object.method(),
// this refers to the object before the dot.

console.log("----- First Car -----");
carOne.getCarInfo();
carOne.startEngine();
carOne.getDriveInfo();

console.log("----- Second Car -----");
carTwo.getCarInfo();
carTwo.startEngine();
carTwo.getDriveInfo();

// Both cars share the prototype methods.
// Each car stores its own brand, model and color.