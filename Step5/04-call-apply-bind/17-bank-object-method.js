// Calling a regular method as object.method()
// makes this refer to that object.

// Branch locations are sample data for this demo.
let bankDetails = {
    name: "HDFC Bank",
    branchLocation: "Bangalore",

    getBankDetails: function () {
        console.log("Bank Name:", this.name);
        console.log("Branch Location:", this.branchLocation);
        console.log("Current Object:", this);
    }
};

// Here, this refers to bankDetails.
bankDetails.getBankDetails();

// Output:
// Bank Name: HDFC Bank
// Branch Location: Bangalore
// Current Object: The bankDetails object