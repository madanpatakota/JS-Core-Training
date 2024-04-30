/*
Encapsulation in JavaScript refers to bundling the data (properties) and methods (functions) 
that operate on the data within a single unit, often called a class or an object.
 This helps in hiding the internal state of an object and only exposing the necessary 
 functionalities to the outside world.
*/

class School {
    constructor(name, location) {
        this._name = name; // Private property
        this._location = location; // Private property
        this._students = []; // Private property
    }

    // Method to enroll a student
    enrollStudent(student) {
        this._students.push(student); // Add student to the list
        console.log(`${student.name} enrolled in ${this._name}`);
    }

    // Method to display the list of enrolled students
    displayStudents() {
        console.log(`Students enrolled in ${this._name}:`);
        this._students.forEach(student => console.log(student.name));
    }

    // Getter method for school name
    get name() {
        return this._name;
    }

    // Getter method for school location
    get location() {
        return this._location;
    }
}

// Define a Student class
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

// Create instances of School and Student
const mySchool = new School("XYZ School", "Cityville");
const student1 = new Student("Alice", 5);
const student2 = new Student("Bob", 6);

// Enroll students in the school
mySchool.enrollStudent(student1);
mySchool.enrollStudent(student2);

// Display enrolled students
mySchool.displayStudents();


/*Explanation :

In this example:

The School class encapsulates the properties (name, location, students) and methods (enrollStudent, displayStudents) related to a school.
The _name, _location, and _students properties are marked as private using the underscore convention.
The enrollStudent method allows adding students to the list of enrolled students. It abstracts away the internal implementation details of maintaining the list.
The displayStudents method displays the names of all enrolled students. It hides the internal representation of the student list from external code.
The name and location getter methods provide controlled access to the private _name and _location properties, allowing read-only access from outside the class.

*/
