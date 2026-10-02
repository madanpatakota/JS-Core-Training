// instanceof checks whether a constructor's prototype
// appears in an object's prototype chain.

class Employee {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }
}

class Manager extends Employee {
}

class Customer {
}

let manager = new Manager("John");

console.log(manager instanceof Manager);  // true
console.log(manager instanceof Employee); // true
console.log(manager instanceof Customer); // false