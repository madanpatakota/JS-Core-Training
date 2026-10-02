/*
A Promise represents the eventual success or failure of an operation.

Promise states:
1. Pending: Waiting for an outcome.
2. Fulfilled: Completed successfully.
3. Rejected: Failed.
*/

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Change to true to demonstrate success.
    let success = false;

    if (success) {
        resolve("Success");
    } else {
        reject("Fail");
    }
});

// Handling the result
myPromise
    .then((successResult) => {
        // Runs when the Promise is fulfilled.
        console.log("Resolved:", successResult);
    })
    .catch((failureResult) => {
        // Runs when the Promise is rejected.
        console.log("Rejected:", failureResult);
    });

/*
When success = false:
Rejected: Fail

When success = true:
Resolved: Success
*/