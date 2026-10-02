// else provides a fallback when no condition matches.

let hasAmazonPrimeAccess = false;
let hasDisneyHotstarAccess = false;
let hasSonyLivAccess = false;

if (hasAmazonPrimeAccess) {
    console.log("You have access to Amazon Prime");
} else if (hasDisneyHotstarAccess) {
    console.log("You have access to Disney Hotstar");
} else if (hasSonyLivAccess) {
    console.log("You have access to Sony LIV");
} else {
    console.log("You do not have access to any listed platform");
}

// Output:
// You do not have access to any listed platform

// Try these changes one at a time:
// 1. Set hasAmazonPrimeAccess to true.
// 2. Set only hasDisneyHotstarAccess to true.
// 3. Set only hasSonyLivAccess to true.
// 4. Set all three values to true.

// When all values are true, only the first block executes.