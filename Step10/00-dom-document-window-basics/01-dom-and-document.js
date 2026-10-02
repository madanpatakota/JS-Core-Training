/*
DOM stands for Document Object Model.

The browser reads our HTML and creates a tree of objects.
JavaScript can access and change these objects.

document represents the current webpage.
*/

// Display the document object
console.log("Current Document:", document);

// Display the webpage title
console.log("Page Title:", document.title);

// Display the main HTML element
console.log("HTML Element:", document.documentElement);

// Display the head and body elements
console.log("Head Element:", document.head);
console.log("Body Element:", document.body);

// document is an object
console.log("Type of document:", typeof document); // object