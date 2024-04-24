/*Returns the inner width and height of the browser window, excluding toolbars and scrollbars.*/
console.log("Inner width: " + window.innerWidth + "px");
console.log("Inner height: " + window.innerHeight + "px");


/*Returns a reference to the Document object, 
which represents the HTML document loaded in the window.*/
console.log("Document title: " + window.document.title);
console.log("Full Document is: " + window.document);// if you want to konw about the doucment put debugger...
console.log("Document head is : " + window.document.head.innerHTML);
console.log("Document body is : " + window.document.body.innerHTML);



/*Returns a Location object containing information about the current URL.*/
console.log("Current URL: " + window.location.href);



/*Provide access to the browser's local storage and session storage, respectively.*/
window.localStorage.setItem("username", "John");
console.log("Stored username: " + window.localStorage.getItem("username"));



 window.alert("Hello, world!"); // or alert("____________");
//        alert("Hello , world");
/*The alert() function is a global function in JavaScript, 
which means it's available in the global scope by default.
 When you call alert() anywhere in your JavaScript code, 
it automatically refers to window.alert().*/



/*Displays a dialog box with a message and OK and Cancel buttons,
 returning true if the user clicks OK and false otherwise.*/
 window.confirm("Do you want to proceed?")

/*Displays a dialog box with a message and an input field for the user to enter text*/
//window.prompt("Enter your name:", "John Doe");

/* a function after a specified delay, in milliseconds.*/
window.setTimeout(function() {
    console.log("Delayed message");
}, 2000); // Executes after 2 seconds


/*setinterval  : Executes a function repeatedly,
with the first execution occurring after a specified delay, in milliseconds*/
window.setInterval(function() {
    console.log("Executing for every second");
}, 1000); 


/*Increment number by every second.........*/
var a = 0;
window.setInterval(function() {
     a = a + 1;
    console.log(a);
}, 1000); 




