// Web Storage stores strings.
// Convert an object into JSON text before storing it.

let employee = {
    employeeName: "John",
    salary: 30000,
    city: "Bangalore"
};

let employeeJson = JSON.stringify(employee);

localStorage.setItem("misard.employeeDetails", employeeJson);

// Read the stored string.
let storedEmployeeJson = localStorage.getItem("misard.employeeDetails");

console.log("Stored JSON:", storedEmployeeJson);
console.log("Stored Type:", typeof storedEmployeeJson); // string

// Convert the JSON string back into an object.
if (storedEmployeeJson !== null) {
    let employeeDetails = JSON.parse(storedEmployeeJson);

    console.log("Employee Name:", employeeDetails.employeeName);
    console.log("Salary:", employeeDetails.salary);
    console.log("City:", employeeDetails.city);
    console.log("Parsed Type:", typeof employeeDetails); // object
}