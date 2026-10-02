// Concatenation means joining strings

var employeeName = "John";
var companyName = "MISARD";
var extraInfo = " He has worked here for 10 years.";

// Join strings using the + operator
var output = employeeName + " works at " + companyName + ".";
console.log("Employee Details:", output);

// Add more text to the existing string
output = output + extraInfo;
console.log("Full Details:", output);

// += is a shorter way to add text to an existing string
var anotherOutput = employeeName + " works at " + companyName + ".";
anotherOutput += extraInfo;
console.log("Using +=:", anotherOutput);





// ------------------------------------------------------After function() please practice below-------------------------------------
// concat() also joins strings
var detailsUsingConcat = employeeName.concat(
    " works at ",
    companyName,
    "."
);
console.log("Using concat():", detailsUsingConcat);

// Include spaces where needed when joining text
var firstName = "John";
var lastName = "Smith";

console.log(firstName + lastName);       // JohnSmith
console.log(firstName + " " + lastName); // John Smith