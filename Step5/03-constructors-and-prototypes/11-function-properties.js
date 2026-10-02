// A function also has properties, such as name and length.

function Car(brandName, modelName) {
    console.log("Brand:", brandName);
    console.log("Model:", modelName);
}

// name: The name of the function
console.log("Function Name:", Car.name); // Car

// length: In this example, the function declares two parameters
console.log("Number of Parameters:", Car.length); // 2

console.log("Type of Car:", typeof Car); // function

// Calling the function
Car("Toyota", "Camry");