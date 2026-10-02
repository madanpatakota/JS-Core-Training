// sessionStorage keeps data for the current tab's page session.
// It survives a page refresh.

sessionStorage.setItem("misard.customerName", "John");
sessionStorage.setItem("misard.selectedCourse", "JavaScript");

console.log(
    "Customer Name:",
    sessionStorage.getItem("misard.customerName")
);

console.log(
    "Selected Course:",
    sessionStorage.getItem("misard.selectedCourse")
);

// Update a value.
sessionStorage.setItem("misard.selectedCourse", "Angular");

console.log(
    "Updated Course:",
    sessionStorage.getItem("misard.selectedCourse")
);

// Remove one item.
sessionStorage.removeItem("misard.customerName");

console.log(sessionStorage.getItem("misard.customerName")); // null