let foodItemName = "Pizza";

function foodApp(item) {
    console.log("Food Application");
    console.log("Food Item:", item);

    // Step Into here to enter logMessage.
    logMessage(item);

    console.log("Back inside foodApp");
}

function logMessage(item) {
    console.log("You have ordered:", item);

    // While paused inside this function,
    // inspect the Call Stack panel.
    // logMessage appears above foodApp.

    console.log("Your order has been received.");
}

// Pause before calling foodApp.
debugger;

foodApp(foodItemName);

let deliveryLocation = "Delhi";
console.log("Delivery Location:", deliveryLocation);

let estimatedTime = "20 Minutes";
console.log("Estimated Delivery Time:", estimatedTime);

let isDeliveryAvailable = true;
console.log("Delivery Available:", isDeliveryAvailable);

/*
Practice:
1. Pause at the foodApp call.
2. Step Into enters foodApp.
3. Step Over executes statements without entering called functions.
4. At logMessage(item), Step Into enters logMessage.
5. Inspect item and the Call Stack.
6. Step Out finishes logMessage and returns to foodApp.
7. Resume continues execution until another breakpoint or completion.
*/