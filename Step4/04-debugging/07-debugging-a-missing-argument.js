// 👮 The inspector needs the car number and driver name.
function inspectCar(carNumber, driverName) {
    // 🛑 Pause and inspect both parameters.
    debugger;

    console.log("Car Number:", carNumber);
    console.log("Driver Name:", driverName);

    console.log("✅ Inspection completed");
}

// ❌ Mistake: the driverName argument is missing.
inspectCar("KA-01-1234");

// ✅ Fix: pass both arguments.
// Comment out the incorrect call above, then run this:
// inspectCar("KA-01-1234", "Madan");

/*
Practice:
1. Open Developer Tools and run the script.
2. Execution pauses inside inspectCar.
3. Inspect the parameters in the Scope panel:
   carNumber = "KA-01-1234"
   driverName = undefined
4. The second argument is missing, so driverName is undefined.
5. Fix the call by passing "Madan" as the second argument.
6. Run again and check that driverName is now "Madan".

JavaScript allows missing arguments.
Debugging helps us identify when a required value is missing.
*/