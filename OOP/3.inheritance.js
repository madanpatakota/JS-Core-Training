/*Inhertinace********

  Inheritance is noting but make a relationship 

  
Inheritance in object-oriented programming allows a subclass to inherit properties and methods 
from a superclass, promoting code reuse and hierarchical relationships.
 JavaScript implements inheritance through  modern class syntax using the extends keyword. 
It facilitates the creation of specialized
subclasses that extend and inherit functionality from more general superclasses.

*/


//Define the Father class

class Father {
    constructor(character, color, eyes) {
      this.character = character;
      this.color = color;
      this.eyes = eyes;
    }
  
    displayDetails() {
      console.log(`Father's character: ${this.character}`);
      console.log(`Father's color: ${this.color}`);
      console.log(`Father's eyes: ${this.eyes}`);
    }
  }
  
  // Define the Son class inheriting from Father
  class Son extends Father {
    constructor(character, color, eyes, hobby) {
      super(character, color, eyes); // Call the superclass constructor with the Son's context
      this.hobby = hobby;
    }
  
    displaySonDetails() {
      this.displayDetails(); // Call the method from the superclass
      console.log(`Son's hobby: ${this.hobby}`);
    }
  }
  
  // Create an instance of the Son class
  const son1 = new Son("Kind", "Fair", "Brown", "Playing Football");
  
  // Display son's details including father's details
  son1.displaySonDetails();
  

  /*Explanation 
  
  
  We define the Father class with a constructor to create Father objects and a displayDetails() method to display father's details.
We define the Son class that extends Father. We call super() in the Son constructor to invoke the Father constructor and inherit properties from Father.
We define a displaySonDetails() method for Son objects to display son's details along with father's details.
Finally, we create an instance son1 of the Son class and call its displaySonDetails() method to display both father's and son's details.
  
  */