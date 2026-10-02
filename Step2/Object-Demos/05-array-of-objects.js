// An array of objects stores multiple records
// [] creates the array; each {} creates an object
var cars = [
    {
        carName: "Renault Kwid",
        color: "Red",
        isAvailable: true
    },
    {
        carName: "Maruti Swift",
        color: "White",
        isAvailable: false
    },
    {
        carName: "Hyundai i20",
        color: "Blue",
        isAvailable: true
    }
];

console.log("All Cars:", cars);
console.log("Total Cars:", cars.length); // 3

// The index selects an object from the array
console.log("First Car Details:", cars[0]);

// Dot notation selects a property from that object
console.log("First Car Name:", cars[0].carName); // Renault Kwid
console.log("Second Car Color:", cars[1].color); // White

// Bracket notation also works
console.log("Third Car Name:", cars[2]["carName"]); // Hyundai i20

// Update a property in an existing record
cars[1].color = "Silver";
console.log("Updated Second Car Color:", cars[1].color);





//------------------------------------------------------------Explain this after the function explanation------------------
// Add a new object to the array
cars.push({
    carName: "Tata Tiago",
    color: "Yellow",
    isAvailable: true
});

console.log("Total Cars After Adding:", cars.length); // 4
console.log("New Car Name:", cars[3].carName);

// Display the records as a table in the console
console.table(cars);