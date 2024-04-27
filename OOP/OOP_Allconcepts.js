// Parent class
class Person {
    constructor(name, age) {
        this._name = name; // Encapsulation: Private property
        this._age = age; // Encapsulation: Private property
    }

    // Encapsulation: Getter methods
    getName() {
        return this._name;
    }

    getAge() {
        return this._age;
    }

    // Abstraction: Method to display person details
    displayDetails() {
        console.log(`Name: ${this.getName()}, Age: ${this.getAge()}`);
    }

    // Polymorphism: Method can be overridden by child classes
    greet() {
        console.log(`Hello, I am ${this.getName()}`);
    }
}

// Child class inheriting from Person
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Inheritance: Call parent constructor
        this._grade = grade; // Encapsulation: Private property
    }

    // Encapsulation: Getter method for grade
    getGrade() {
        return this._grade;
    }

    // Abstraction: Method to display student details
    displayDetails() {
        super.displayDetails(); // Polymorphism: Call parent method
        console.log(`Grade: ${this.getGrade()}`);
    }

    // Polymorphism: Override greet method
    greet() {
        console.log(`Hello, I am ${this.getName()} and I am a student`);
    }
}

// Abstraction: Function to display person or student details without knowing internal implementation
function displayPersonDetails(person) {
    person.displayDetails(); // Polymorphism: Call displayDetails method
}

// Create instances of Person and Student
const person1 = new Person("Alice", 30);
const student1 = new Student("Bob", 20, "A");

// Display details using abstraction
displayPersonDetails(person1);
displayPersonDetails(student1);

// Polymorphism: Demonstrate method overriding
person1.greet();
student1.greet();



/* Explanation :

In this example:

Encapsulation: Private properties _name and _age are encapsulated within the Person class. Getter methods getName() and getAge() provide controlled access to these properties.
Inheritance: The Student class inherits properties and methods from the Person class using super() constructor.
Polymorphism: The displayDetails() method is polymorphic, being defined in both the Person and Student classes. The greet() method is overridden in the Student class to provide a different implementation.
Abstraction: The displayDetails() method provides a high-level abstraction to display person or student details, hiding the internal implementation details of each class. The displayPersonDetails() function demonstrates abstraction by accepting a Person object as an argument and calling its displayDetails() method without needing to know whether it's a Person or Student.

*/