// new creates an instance and automatically calls its constructor.

class Customer {
    constructor(customerName, city) {
        console.log("Constructor called");

        this.customerName = customerName;
        this.city = city;
    }
}

let customer = new Customer("John", "Bangalore");

console.log("Customer Name:", customer.customerName);
console.log("City:", customer.city);

/*
Output:
Constructor called
Customer Name: John
City: Bangalore
*/

// Calling a class constructor without new causes a TypeError.
// let anotherCustomer = Customer("Peter", "Hyderabad");