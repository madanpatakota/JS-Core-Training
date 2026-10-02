// Separate if statements check each condition independently.
// An if...else if chain selects only the first match.

let hasAmazonPrimeAccess = true;
let hasDisneyHotstarAccess = true;

console.log("----- Separate if Statements -----");

if (hasAmazonPrimeAccess) {
    console.log("Amazon Prime access is available");
}

if (hasDisneyHotstarAccess) {
    console.log("Disney Hotstar access is available");
}

console.log("----- if...else if Chain -----");

if (hasAmazonPrimeAccess) {
    console.log("Amazon Prime access is available");
} else if (hasDisneyHotstarAccess) {
    console.log("Disney Hotstar access is available");
}

// Output:
// ----- Separate if Statements -----
// Amazon Prime access is available
// Disney Hotstar access is available
// ----- if...else if Chain -----
// Amazon Prime access is available

// Separate if statements: Multiple blocks can execute.
// if...else if chain: Only the first matching block executes.