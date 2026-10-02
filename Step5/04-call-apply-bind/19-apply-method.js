// apply() runs the function immediately.
// The first argument specifies the object to use as this.
// Pass the function's arguments inside an array.

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

// Here, this refers to axisBankDetails.
// "Peter" becomes customerName.
// "Current" becomes accountType.
bankDetails.getBankDetails.apply(
    axisBankDetails,
    ["Peter", "Current"]
);

// Output:
// Bank Name: Axis Bank
// Branch Location: Hyderabad
// Customer Name: Peter
// Account Type: Current

// call(): Arguments are passed individually.
// apply(): Arguments are passed inside an array.