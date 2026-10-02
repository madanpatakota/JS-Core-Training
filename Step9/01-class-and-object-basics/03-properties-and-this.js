class Employee {
    constructor(employeeName, salary) {
        // this refers to the instance being initialized.
        this.employeeName = employeeName;
        this.salary = salary;
    }

    displaySalary() {
        // When called as employee.displaySalary(),
        // this refers to employee.
        console.log("Salary:", this.salary);
    }
}

let employee = new Employee("John", 30000);

// Access public properties.
console.log("Employee Name:", employee.employeeName);
console.log("Original Salary:", employee.salary);

// Update a public property.
employee.salary = 35000;

employee.displaySalary(); // Salary: 35000