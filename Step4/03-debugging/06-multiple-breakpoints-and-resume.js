// 🚗 Car starts its journey.
let carNumber = "KA-01-1234";
let itemsInCar = ["Clothes", "Books"];

console.log("🚗 Car started its journey");

// 🛑 Checkpoint 1: inspect the current items.
debugger;
console.log("👮 Checkpoint 1:", itemsInCar);

// A laptop is added before the next checkpoint.
itemsInCar.push("Laptop");
console.log("🚗 Car is travelling to Checkpoint 2");

// 🛑 Checkpoint 2: inspect the updated items.
debugger;
console.log("👮 Checkpoint 2:", itemsInCar);

// Books are removed before the next checkpoint.
itemsInCar.splice(1, 1);
console.log("🚗 Car is travelling to Checkpoint 3");

// 🛑 Checkpoint 3: inspect the remaining items.
debugger;
console.log("👮 Checkpoint 3:", itemsInCar);

console.log("🏁 Car reached its destination");

/*
Practice:
1. Open Developer Tools and run the script.
2. At Checkpoint 1, inspect itemsInCar:
   ["Clothes", "Books"]
3. Click Resume to continue to Checkpoint 2:
   ["Clothes", "Books", "Laptop"]
4. Click Resume to continue to Checkpoint 3:
   ["Clothes", "Laptop"]
5. Click Resume again to finish the journey.

You can also remove the debugger statements and set
breakpoints by clicking line numbers in the Sources panel.

Resume runs until the next breakpoint, debugger statement,
or the end of execution.
*/