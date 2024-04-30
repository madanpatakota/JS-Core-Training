

/*Prototype

In JavaScript, every object has a prototype.
 The prototype is an object from which other objects inherit properties. 
 When you try to access a property on an object, JavaScript first checks if that property exists 
 directly on the object. If it doesn't,
 it looks up the prototype chain until it finds the property or reaches the end of the chain.
*/


//String.prototype.

String.prototype.capitalizeFirstAndLast = function() {
    return   this.charAt(0).toUpperCase() 
           + this.slice(1, -1) 
           + this.charAt(this.length - 1).toLowerCase();
};

// Example usage:
const str = "hello";
console.log(str.capitalizeFirstAndLast()); // Output: HellO