// Default import: addition
// Named imports: calculatorName and multiply
// as gives a named import a different local name.

import addition, {
    calculatorName,
    multiply as calculateProduct
} from "./calculator-module.js";

console.log("Calculator:", calculatorName);
console.log("Addition:", addition(10, 5));             // 15
console.log("Multiplication:", calculateProduct(10, 5)); // 50