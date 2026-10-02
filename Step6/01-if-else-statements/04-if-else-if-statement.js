// An if...else if chain checks conditions in order.
// Only the first matching block executes.

let hasAmazonPrimeAccess = false;
let hasDisneyHotstarAccess = true;
let hasSonyLivAccess = true;

if (hasAmazonPrimeAccess) {
    console.log("You have access to Amazon Prime");
} else if (hasDisneyHotstarAccess) {
    console.log("You have access to Disney Hotstar");
} else if (hasSonyLivAccess) {
    console.log("You have access to Sony LIV");
}

console.log("Streaming access check completed");

// Output:
// You have access to Disney Hotstar
// Streaming access check completed

// Both Hotstar and Sony LIV values are true.
// Only the Hotstar block executes because it matches first.

// If all three values are false, none of these blocks execute.
// The final console.log still runs.