/************Polymorphism
Polymorphism in object-oriented programming refers to the ability
 of different objects to respond to the same message or method call
  in different ways. It allows objects of different classes to be treated as objects of a common superclass, enabling code reuse and flexibility.

To implement polymorphism:

Define a superclass/interface with a method.
Create multiple subclasses that inherit from the superclass or implement the interface.
Override the method in each subclass to provide different implementations.
*/
// Parent class representing a Shape
class Shape {
    constructor() {}

    // Method to calculate area
    calculateArea() {
        return 0; // Default implementation returns 0
    }
}

// Child class representing a Rectangle, inheriting from Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Override calculateArea method for Rectangle
    calculateArea() {
        return this.width * this.height; // Area of a rectangle = width * height
    }
}

// Child class representing a Circle, inheriting from Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Override calculateArea method for Circle
    calculateArea() {
        return Math.PI * this.radius ** 2; // Area of a circle = π * radius^2
    }
}

// Function to demonstrate polymorphism by calculating area of any shape
function calculateShapeArea(shape) {
    return shape.calculateArea(); // Calls the calculateArea method of the provided shape
}

// Create instances of Rectangle and Circle
const rectangle = new Rectangle(5, 4);
const circle = new Circle(3);

// Calculate area of shapes using polymorphism
console.log("Area of rectangle:", calculateShapeArea(rectangle)); // Output: Area of rectangle: 20
console.log("Area of circle:", calculateShapeArea(circle)); // Output: Area of circle: 28.274333882308138


/**************************Explanation*********************

The Shape class defines a method calculateArea() with a default implementation returning 0.
The Rectangle and Circle classes inherit from Shape and override the calculateArea() method with their own implementations to calculate the area specific to each shape.
The calculateShapeArea() function accepts any object that extends Shape and calls its calculateArea() method. This demonstrates polymorphism, as it can calculate the area of any shape without knowing its specific type.

*/