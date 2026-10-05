var employeeDetails = {
    employeeName: "John",
    salary: 30000,
    city: "Bangalore"
};

console.log("Employee Name:", employeeDetails.employeeName);

// Add a new property
employeeDetails.department = "Development";
console.log("Added Department:", employeeDetails.department);

// Add a property using bracket notation
employeeDetails["email"] = "john@example.com";
console.log("Added Email:", employeeDetails.email);

// Update an existing property
employeeDetails.salary = 35000;
console.log("Updated Salary:", employeeDetails.salary);

// Update using bracket notation
employeeDetails["city"] = "Hyderabad";
console.log("Updated City:", employeeDetails.city);

// Delete a property
delete employeeDetails.email;
console.log("Email After Deletion:", employeeDetails.email); // undefined

console.log("Updated Employee Details:", employeeDetails);