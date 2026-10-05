// Backticks allow a string to span multiple lines
var trainingMessage = `Welcome to MISARD.
We are learning JavaScript.
Today we are practising strings.`;

console.log(trainingMessage);

// Single and double quotes can appear inside backticks
var quotedMessage = `John said, "It's time to learn JavaScript."`;
console.log(quotedMessage);

// Backticks also allow inserting values using ${variableName}
var employeeName = "John";
var companyName = "MISARD";

var employeeDetails = `${employeeName} works at ${companyName}.`;
console.log(employeeDetails); // John works at MISARD.