// Car analogy:
// The driver calls start() without managing the internal steps.
// These console messages simulate the car's operations.

class Car {
    constructor(model, colour) {
        this.model = model;
        this.colour = colour;
    }

    #checkFuel() {
        console.log("Internal step: Checking fuel.");
    }

    #activateEngine() {
        console.log("Internal step: Activating the engine.");
    }

    start() {
        this.#checkFuel();
        this.#activateEngine();

        console.log(`${this.colour} ${this.model} has started.`);
    }

    brake() {
        console.log(`${this.model} is stopping.`);
    }
}

let car = new Car("Renault Kwid", "Red");

// Simple operations available to the caller.
car.start();
car.brake();

// Private internal methods cannot be called directly outside the class.
// car.#activateEngine();