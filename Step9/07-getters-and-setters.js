// A getter reads a value through property syntax.
// A setter controls an assignment through property syntax.

class Employee {
    #salary;

    constructor(employeeName, salary) {
        this.employeeName = employeeName;
        this.salary = salary; // Calls the setter.
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        if (!Number.isFinite(value) || value < 0) {
            console.log("Salary must be a valid non-negative number.");
            return;
        }

        this.#salary = value;
    }
}

let employee = new Employee("John", 30000);

// Reads through the getter.
console.log("Original Salary:", employee.salary);

// Updates through the setter.
employee.salary = 35000;
console.log("Updated Salary:", employee.salary);

// The setter rejects this value.
employee.salary = -5000;
console.log("Salary After Invalid Update:", employee.salary); // 35000