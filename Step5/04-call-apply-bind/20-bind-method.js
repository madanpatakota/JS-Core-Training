// bind() returns a new function.
// It does not run the original function immediately.
// The returned function remembers the specified this value.

let bankDetails = {
    name: "HDFC Bank",
    branchLocation: "Bangalore",

    getBankDetails: function (customerName, accountType) {
        console.log("Bank Name:", this.name);
        console.log("Branch Location:", this.branchLocation);
        console.log("Customer Name:", customerName);
        console.log("Account Type:", accountType);
    }
};

let axisBankDetails = {
    name: "Axis Bank",
    branchLocation: "Hyderabad"
};

// Create a new function with this set to axisBankDetails.
// Also preset the customerName and accountType arguments.
let getAxisBankDetails = bankDetails.getBankDetails.bind(
    axisBankDetails,
    "Peter",
    "Current"
);

// The bank details have not been displayed yet.
console.log("Bound Function Created");
console.log("Type:", typeof getAxisBankDetails); // function

// Logging the function displays its representation.
// It does not execute the function.
console.log("Bound Function:", getAxisBankDetails);

// Call the returned function to display the details.
console.log("----- Calling the Bound Function -----");
getAxisBankDetails();

// Output:
// Bank Name: Axis Bank
// Branch Location: Hyderabad
// Customer Name: Peter
// Account Type: Current

// Another option: Bind only this and pass arguments later.
let showAxisCustomer = bankDetails.getBankDetails.bind(
    axisBankDetails
);

showAxisCustomer("Mary", "Savings");

// call(): Runs immediately; accepts individual arguments.
// apply(): Runs immediately; accepts an array of arguments.
// bind(): Returns a new function that you can call later.

// Use regular functions for this demo.
// call(), apply() and bind() cannot change an arrow function's this.