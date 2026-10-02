/*
window represents the browser window or tab.

It provides browser features such as alerts,
timers and browser storage.
*/

console.log("Window Object:", window);

console.log("Type of window:", typeof window); // object

// Display the current page address
console.log("Page Address:", window.location.href);

// Display the webpage viewing area size in pixels
console.log("Viewing Area Width:", window.innerWidth);
console.log("Viewing Area Height:", window.innerHeight);

// Display a message in an alert box
window.alert("Welcome to MISARD!");