// A module can have one default export.

export default class Employee {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }

    displayName() {
        console.log("Employee Name:", this.employeeName);
    }
}