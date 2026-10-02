// switch compares a value against different cases.
// The matching case executes.
// break exits the switch.
// default runs when no case matches.

/*
Syntax:

switch (expression) {
    case value1:
        // Code for value1
        break;

    case value2:
        // Code for value2
        break;

    default:
        // Code when no case matches
}
*/

let platformAccess = "AmazonPrime";

let ottPlatformOne = "AmazonPrime";
let ottPlatformTwo = "Netflix";
let ottPlatformThree = "SonyLiv";

switch (platformAccess) {
    case ottPlatformOne:
        console.log("You have access to Amazon Prime");
        break;

    case ottPlatformTwo:
        console.log("You have access to Netflix");
        break;

    case ottPlatformThree:
        console.log("You have access to Sony LIV");
        break;

    default:
        console.log("You do not have access to any listed platform");
}

console.log("Platform access check completed");

// Output:
// You have access to Amazon Prime
// Platform access check completed

// Try changing platformAccess to:
// "Netflix"     -> Netflix message
// "SonyLiv"     -> Sony LIV message
// "Other"       -> Default message

// String matching is case-sensitive.
// "amazonprime" does not match "AmazonPrime".