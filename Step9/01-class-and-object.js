// A class is a blueprint used to create objects.
// Properties store data. Methods define actions.

class Employee {
    constructor(employeeName, employeeSalary) {
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
    }

    displayDetails() {
        console.log("Employee Name:", this.employeeName);
        console.log("Employee Salary:", this.employeeSalary);
    }
}

// Create an object from the class.
let employee = new Employee("John", 30000);

// Call the object's method.
employee.displayDetails();