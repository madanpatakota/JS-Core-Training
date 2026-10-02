/*
This explains the result shown in your last screenshots.

Top-level var creates properties on window.
The arrow reads those window properties.
*/

var achievements = ["Global achievement for demonstration"];
var dateOfBirth = "Global date for demonstration";

const author = {
    name: "Rabindranath Tagore",
    dateOfBirth: "May 7, 1861",
    achievements: ["Nobel Prize in Literature"],

    getDetails: () => {
        console.log("Is this window?", this === window); // true

        console.log("Arrow Achievements:", this.achievements);
        // ["Global achievement for demonstration"]

        console.log("Arrow Date:", this.dateOfBirth);
        // Global date for demonstration
    }
};

author.getDetails();

// These are the actual object properties
console.log("Object Achievements:", author.achievements);
// ["Nobel Prize in Literature"]

console.log("Object Date:", author.dateOfBirth);
// May 7, 1861

// The arrow's this did not change.
// Adding global properties only changed what it could read.