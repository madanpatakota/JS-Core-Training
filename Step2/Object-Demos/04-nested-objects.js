// A nested object is an object inside another object
var customerDetails = {
    customerName: "John",
    age: 30,
    address: {
        city: "Bangalore",
        state: "Karnataka",
        postalCode: "560001"
    }
};

// Access the complete inner object
console.log("Address:", customerDetails.address);

// Access properties inside the inner object
console.log("City:", customerDetails.address.city);
console.log("State:", customerDetails.address.state);
console.log("Postal Code:", customerDetails.address.postalCode);

// Access using bracket notation
console.log("City:", customerDetails["address"]["city"]);

// Update a nested property
customerDetails.address.city = "Mysore";
console.log("Updated City:", customerDetails.address.city);

// Add a nested property
customerDetails.address.country = "India";
console.log("Country:", customerDetails.address.country);