/*
The style property changes an element's inline CSS.

Use camelCase for CSS properties with multiple words:
background-color becomes backgroundColor.
font-size becomes fontSize.
*/

const headingElement = document.getElementById("welcomeHeading");

// Change heading styles
headingElement.style.color = "white";
headingElement.style.backgroundColor = "#00215E";
headingElement.style.padding = "15px";
headingElement.style.fontSize = "28px";

const paragraphElement = document.getElementById("courseDescription");

// Change paragraph styles
paragraphElement.style.color = "#00215E";
paragraphElement.style.fontSize = "20px";

console.log("Heading and paragraph styles updated.");