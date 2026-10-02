/*
HTML elements such as headings, paragraphs and buttons
are represented as element objects in the DOM.

getElementById() finds an element using its id.
Write the id inside quotes.
*/

// Access the heading
const headingElement = document.getElementById("welcomeHeading");

console.log("Heading Element:", headingElement);
console.log("Heading Text:", headingElement.textContent);

// Access the paragraph
const paragraphElement = document.getElementById("courseDescription");

console.log("Paragraph Element:", paragraphElement);
console.log("Paragraph Text:", paragraphElement.textContent);

// Access the button
const buttonElement = document.getElementById("updateButton");

console.log("Button Element:", buttonElement);
console.log("Button Text:", buttonElement.textContent);

// If the id does not exist, the result is null
const missingElement = document.getElementById("unknownID");

console.log("Missing Element:", missingElement); // null

// Element ids are case-sensitive
console.log(document.getElementById("WelcomeHeading")); // null