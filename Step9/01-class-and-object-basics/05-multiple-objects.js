// One class can create multiple objects.
// Each instance has its own property values.

class Employee {
    constructor(employeeName, salary) {
        this.employeeName = employeeName;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Employee:", this.employeeName);
        console.log("Salary:", this.salary);
    }
}

let employeeOne = new Employee("John", 30000);
let employeeTwo = new Employee("Peter", 40000);

employeeOne.displayDetails();
employeeTwo.displayDetails();

// Updating employeeOne does not update employeeTwo.
employeeOne.salary = 35000;

console.log("John's Salary:", employeeOne.salary);   // 35000
console.log("Peter's Salary:", employeeTwo.salary); // 40000