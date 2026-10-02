/*
textContent reads or changes the text of an element.
Changes appear on the webpage.
*/

const headingElement = document.getElementById("welcomeHeading");

console.log("Original Heading:", headingElement.textContent);

// Change the heading text
headingElement.textContent = "MISARD Software Solutions";

console.log("Updated Heading:", headingElement.textContent);

// Change the paragraph text
const paragraphElement = document.getElementById("courseDescription");

paragraphElement.textContent = "We are learning DOM basics.";

console.log("Updated Paragraph:", paragraphElement.textContent);