/************Polymorphism
Polymorphism in object-oriented programming refers to the ability
 of different objects to respond to the same message or method call
  in different ways. It allows objects of different classes to be treated as objects of a common superclass, enabling code reuse and flexibility.

To implement polymorphism:

Define a superclass/interface with a method.
Create multiple subclasses that inherit from the superclass or implement the interface.
Override the method in each subclass to provide different implementations.
*/// Define a base class Person with a method act()
class Person {
    constructor(name) {
      this.name = name;
    }
  
    // Method to perform an action
    act() {
      console.log(`${this.name} performs a generic action.`);
    }
  }
  
  // Define subclasses with specific behaviors
  class OfficeGoer extends Person {
    // Override act() method for office going behavior
    act() {
      console.log(`${this.name} goes to the office.`);
    }
  }
  
  class ChatWithWife extends Person {
    // Override act() method for chatting with wife behavior
    act() {
      console.log(`${this.name} chats with his wife.`);
    }
  }
  
  class GoesToMarket extends Person {
    // Override act() method for going to the market behavior
    act() {
      console.log(`${this.name} goes to the market.`);
    }
  }
  
  class FulfillsRequirements extends Person {
    // Override act() method for fulfilling family requirements behavior
    act() {
      console.log(`${this.name} fulfills the family requirements.`);
    }
  }
  
  // Create instances of different behaviors
  const person1 = new OfficeGoer("John");
  const person2 = new ChatWithWife("Mike");
  const person3 = new GoesToMarket("Alice");
  const person4 = new FulfillsRequirements("Emma");
  
  // Call the act() method on each person object
  person1.act(); // Output: John goes to the office.
  person2.act(); // Output: Mike chats with his wife.
  person3.act(); // Output: Alice goes to the market.
  person4.act(); // Output: Emma fulfills the family requirements.
  

/**************************Explanation*********************
n this example, we have a base class Person with a method act() representing a generic action.
 Subclasses like OfficeGoer, ChatWithWife, GoesToMarket, and FulfillsRequirements inherit from Person and override the act() method with their specific behaviors. 
 When the act() method is called on instances of these subclasses, it executes the behavior specific to each subclass, demonstrating polymorphism.
*/