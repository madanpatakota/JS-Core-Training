// Start all three tasks without waiting for each other.
// Promise.all waits until all three Promises are fulfilled.

function getFirstAuthorDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Task One Completed (4s)");
            resolve("Rabindranath Tagore");
        }, 4000);
    });
}

function getSecondAuthorDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Task Two Completed (2s)");
            resolve("J. K. Rowling");
        }, 2000);
    });
}

function getThirdAuthorDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Change to false to demonstrate rejection.
            let isAuthorAvailable = true;

            if (isAuthorAvailable) {
                console.log("✅ Task Three Completed (5s)");
                resolve("Arundhati Roy");
            } else {
                reject("No author");
            }
        }, 5000);
    });
}

console.time("PromisesTime");

Promise.all([
    getFirstAuthorDetails(),
    getSecondAuthorDetails(),
    getThirdAuthorDetails()
])
    .then((allAuthors) => {
        console.log("All Authors:", allAuthors);
        console.timeEnd("PromisesTime");
    })
    .catch((error) => {
        console.error("❌ Error:", error);
        console.timeEnd("PromisesTime");
    });

/*
Expected completion order:
✅ Task Two Completed (2s)
✅ Task One Completed (4s)
✅ Task Three Completed (5s)

All Authors:
["Rabindranath Tagore", "J. K. Rowling", "Arundhati Roy"]

PromisesTime: approximately 5000 ms

Results follow the input order, even when tasks finish in a different order.
If any Promise rejects, Promise.all rejects.
It does not cancel the other tasks.
*/