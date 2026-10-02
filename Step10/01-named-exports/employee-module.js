// Export a variable.
export const companyName = "MISARD";

// Export an object.
export const companyDetails = {
    name: "MISARD",
    location: "Bangalore"
};

// Export a function.
export function displayWelcome() {
    console.log("Welcome to MISARD");
}

// Export a class.
export class Employee {
    constructor(employeeName, salary) {
        this.employeeName = employeeName;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Employee Name:", this.employeeName);
        console.log("Salary:", this.salary);
    }
}