// ATM analogy:
// The balance changes through controlled methods.
// #balance is private and cannot be accessed directly outside the class.

class BankAccount {
    #balance;

    constructor(accountHolder, openingBalance) {
        this.accountHolder = accountHolder;
        this.#balance = openingBalance;
    }

    checkBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            console.log("Please enter a valid deposit amount.");
            return;
        }

        this.#balance += amount;
        console.log("Deposit completed:", amount);
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            console.log("Please enter a valid withdrawal amount.");
            return;
        }

        if (amount > this.#balance) {
            console.log("Insufficient balance.");
            return;
        }

        this.#balance -= amount;
        console.log("Withdrawal completed:", amount);
    }
}

let account = new BankAccount("John", 10000);

console.log("Account Holder:", account.accountHolder);
console.log("Opening Balance:", account.checkBalance());

account.deposit(2000);
console.log("Balance After Deposit:", account.checkBalance()); // 12000

account.withdraw(3000);
console.log("Balance After Withdrawal:", account.checkBalance()); // 9000

account.withdraw(20000); // Insufficient balance.

// Uncommenting this causes a SyntaxError.
// console.log(account.#balance);