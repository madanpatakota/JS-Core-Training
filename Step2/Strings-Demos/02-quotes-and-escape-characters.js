// Single quotes can appear inside a double-quoted string
var message1 = "Yes, it's true.";
console.log(message1);

// Double quotes can appear inside a single-quoted string
var message2 = 'John said, "Welcome to MISARD."';
console.log(message2);

// Use a backslash to include the same quote used around the string

// \' represents a single quote
var message3 = 'Yes, it\'s true.';
console.log(message3);

// \" represents a double quote
var message4 = "John said, \"Welcome to MISARD.\"";
console.log(message4);

// \\ represents a backslash
var folderPath = "C:\\Training\\JavaScript";
console.log("Folder Path:", folderPath);

// \n starts a new line
var employeeDetails = "Employee: John\nCompany: MISARD";
console.log(employeeDetails);

// \t adds a tab
var employeeHeading = "Name\tDepartment";
console.log(employeeHeading);

// HTML can also be stored as a string
// console.log displays the text; it does not create an HTML element
var paragraphElement = "<p id=\"message\">Welcome to MISARD</p>";
console.log(paragraphElement);

// Using single quotes outside avoids escaping double quotes inside
var anchorElement = '<a href="https://www.google.com">Google</a>';
console.log(anchorElement);