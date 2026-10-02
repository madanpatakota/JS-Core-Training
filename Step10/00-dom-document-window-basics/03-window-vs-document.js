/*
window: Represents the browser window or tab.
document: Represents the webpage loaded inside it.

document is available through window.document.
*/

console.log("Browser Window:", window);
console.log("Current Webpage:", document);

// Both refer to the same document object
console.log(window.document === document); // true

// Both display the same webpage title
console.log("Using document:", document.title);
console.log("Using window.document:", window.document.title);

// Browser feature
// window.alert("Hello from the browser window!");

// Webpage information
console.log("Webpage Body:", document.body);