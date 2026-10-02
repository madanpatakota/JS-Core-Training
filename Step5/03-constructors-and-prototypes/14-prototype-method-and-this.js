// The constructor stores properties on each new object.

function Car() {
    this.brand = "Toyota";
    this.model = "Camry";
    this.color = "Red";
}

// The method is stored on the prototype.
Car.prototype.getCarInfo = function () {
    // When called as carOne.getCarInfo(),
    // this refers to carOne.
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
    console.log("Color:", this.color);
};

var carOne = new Car();

console.log("Car Object:", carOne);
carOne.getCarInfo();

// Update a property on the object
carOne.color = "White";

// The same method now displays the updated color.
console.log("After Updating the Color:");
carOne.getCarInfo();