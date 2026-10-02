/*
addEventListener() registers a function for an event.

Here, the function runs whenever the button is clicked.
The function passed to addEventListener() is a callback.
*/

const buttonElement = document.getElementById("updateButton");
const headingElement = document.getElementById("welcomeHeading");
const paragraphElement = document.getElementById("courseDescription");

// Define the function
function updateMessage() {
    headingElement.textContent = "Hello, MISARD Interns!";

    paragraphElement.textContent = "You clicked the button.";

    headingElement.style.color = "white";
    headingElement.style.backgroundColor = "#00215E";
    headingElement.style.padding = "15px";

    console.log("Button clicked.");
    console.log("Updated Heading:", headingElement.textContent);
}

// Register the function for the click event
buttonElement.addEventListener("click", updateMessage);

// Pass updateMessage without ().
// updateMessage() would call the function immediately.