/*What is abstraction
  Abstraction in object-oriented programming refers to the process of hiding complex 
  implementation details and showing only the essential features of an object.
   It allows developers to focus on what an object does rather than how it achieves its 
   functionality, promoting simplicity, modularity, and maintainability in code. 
*/

// Define a BankAccount class
class BankAccount {
  constructor(accountNumber, initialBalance, ownerName) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.ownerName = ownerName;
  }

  // Method to deposit funds into the account
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}`);
  }

  // Method to withdraw funds from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
    } else {
      console.log(
        `Insufficient funds to withdraw ${amount} from account ${this.accountNumber}`
      );
    }
  }

  // Method to check the account balance
  checkBalance() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
    return this.balance;
  }
}

// Create a new bank account instance
const myAccount = new BankAccount("123456789", 1000, "John Doe");

// Perform operations on the account
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.checkBalance();

/*Explanation :
In this example:

The BankAccount class encapsulates the properties and methods related to a bank account.
Abstraction is achieved by hiding the internal implementation details (like how balances are stored or updated) and exposing only the essential functionalities (like depositing, withdrawing, and checking balance) to the user.
Users interact with the bank account object (myAccount) through its public methods (deposit, withdraw, checkBalance) without needing to know the internal workings of the class. This separation of concerns allows for easier maintenance and modification of the codebase.

*/
