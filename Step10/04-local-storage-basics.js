// localStorage stores string values as key-value pairs.
// Data normally remains across browser sessions.

// Store values.
localStorage.setItem("misard.employeeName", "John");
localStorage.setItem("misard.companyName", "MISARD");

// Read values.
console.log(
    "Employee Name:",
    localStorage.getItem("misard.employeeName")
);

console.log(
    "Company Name:",
    localStorage.getItem("misard.companyName")
);

// Update an existing value.
localStorage.setItem("misard.employeeName", "Peter");

console.log(
    "Updated Employee:",
    localStorage.getItem("misard.employeeName")
);

// Remove one item.
localStorage.removeItem("misard.employeeName");

// A missing key returns null.
console.log(localStorage.getItem("misard.employeeName")); // null