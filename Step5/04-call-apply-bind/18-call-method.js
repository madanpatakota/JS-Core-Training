// call() runs the function immediately.
// The first argument specifies the object to use as this.
// Additional arguments are passed individually.

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

// Normal method call: this refers to bankDetails.
console.log("----- Normal Method Call -----");
bankDetails.getBankDetails("John", "Savings");

// Borrow the same method for axisBankDetails.
// Here, this refers to axisBankDetails.
console.log("----- Using call() -----");
bankDetails.getBankDetails.call(
    axisBankDetails,
    "Peter",
    "Current"
);

// Output from call():
// Bank Name: Axis Bank
// Branch Location: Hyderabad
// Customer Name: Peter
// Account Type: Current

// call() does not add getBankDetails to axisBankDetails.
console.log(
    "Method on Axis Object:",
    typeof axisBankDetails.getBankDetails
); // undefined