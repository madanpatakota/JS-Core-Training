// Regular instance methods declared in a class
// are stored on the class's prototype.

class Employee {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }

    displayName() {
        console.log("Employee Name:", this.employeeName);
    }
}

let employeeOne = new Employee("John");
let employeeTwo = new Employee("Peter");

employeeOne.displayName();
employeeTwo.displayName();

// Each instance has its own employeeName property.
console.log(Object.hasOwn(employeeOne, "employeeName")); // true

// displayName is inherited from Employee.prototype.
console.log(Object.hasOwn(employeeOne, "displayName")); // false
console.log(Object.hasOwn(Employee.prototype, "displayName")); // true

// Both objects share the same method.
console.log(employeeOne.displayName === employeeTwo.displayName); // true

console.log(
    Object.getPrototypeOf(employeeOne) === Employee.prototype
); // true