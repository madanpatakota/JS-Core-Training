/*
A global variable and an object property are different.

this.dateOfBirth reads a property from the method's receiver.
It does not search global variables for that property.
*/

var dateOfBirth = "May 7, 1861";

const author = {
    name: "Rabindranath Tagore",

    getDetails: function () {
        console.log("Author Name:", this.name);

        // Reads the global variable
        console.log("Global Date:", dateOfBirth);

        // author does not have this property yet
        console.log("Object Date:", this.dateOfBirth); // undefined
    }
};

author.getDetails();

// Add the missing property to the object
author.dateOfBirth = dateOfBirth;

console.log("After adding the object property:");
author.getDetails();

// Object Date now displays May 7, 1861