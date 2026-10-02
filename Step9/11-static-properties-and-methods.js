// Static members belong to the class.
// Instance members belong to individual objects.

class Employee {
    static companyName = "MISARD";

    constructor(employeeName) {
        this.employeeName = employeeName;
    }

    // Instance method
    displayEmployee() {
        console.log("Employee Name:", this.employeeName);
    }

    // Static method
    static displayCompany() {
        console.log("Company Name:", Employee.companyName);
    }
}

let employee = new Employee("John");

// Use the object for instance members.
employee.displayEmployee();

// Use the class for static members.
console.log(Employee.companyName);
Employee.displayCompany();

// A static method is not an instance method.
// employee.displayCompany(); // TypeError