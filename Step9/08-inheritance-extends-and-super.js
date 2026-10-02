// The child class reuses accessible members of the parent class.
// This illustrates the parent-child analogy from your PPT.

class Parent {
    constructor(eyeColour, hairType) {
        this.eyeColour = eyeColour;
        this.hairType = hairType;
    }

    displayFeatures() {
        console.log("Eye Colour:", this.eyeColour);
        console.log("Hair Type:", this.hairType);
    }
}

class Child extends Parent {
    constructor(childName, eyeColour, hairType, favouriteGame) {
        // Call the parent constructor before using this.
        super(eyeColour, hairType);

        this.childName = childName;
        this.favouriteGame = favouriteGame;
    }

    displayChildDetails() {
        console.log("Child Name:", this.childName);
        console.log("Favourite Game:", this.favouriteGame);
    }
}

let child = new Child("John", "Brown", "Curly", "Cricket");

// Reuse the parent method.
child.displayFeatures();

// Call the child's own method.
child.displayChildDetails();

// Parent private fields would not be directly accessible in Child.