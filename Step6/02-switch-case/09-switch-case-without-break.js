// Without break, execution continues into the following cases.
// This behaviour is called fall-through.

let platformAccess = "AmazonPrime";

switch (platformAccess) {
    case "AmazonPrime":
        console.log("Amazon Prime case executed");
        // No break here: execution continues.

    case "Netflix":
        console.log("Netflix case also executed");
        break;

    case "SonyLiv":
        console.log("Sony LIV case executed");
        break;

    default:
        console.log("No matching platform");
}

// Output:
// Amazon Prime case executed
// Netflix case also executed

// Netflix does not match platformAccess.
// Its statement runs because the previous case has no break.

// Add break after the Amazon Prime message and run again.
// Only the Amazon Prime message will appear.