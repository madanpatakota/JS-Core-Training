// Promise chaining: Start the next task after the previous task succeeds.

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

// Measure the total duration.
console.time("PromisesTime");

getFirstAuthorDetails()
    .then((firstAuthor) => {
        console.log("First Author:", firstAuthor);

        // Return the Promise so the chain waits for its result.
        return getSecondAuthorDetails();
    })
    .then((secondAuthor) => {
        console.log("Second Author:", secondAuthor);

        return getThirdAuthorDetails();
    })
    .then((thirdAuthor) => {
        console.log("Third Author:", thirdAuthor);
        console.timeEnd("PromisesTime");
    })
    .catch((error) => {
        // Handles rejection from any of the three tasks.
        console.error("❌ Error:", error);
        console.timeEnd("PromisesTime");
    });

/*
Expected output:
✅ Task One Completed (4s)
First Author: Rabindranath Tagore
✅ Task Two Completed (2s)
Second Author: J. K. Rowling
✅ Task Three Completed (5s)
Third Author: Arundhati Roy
PromisesTime: approximately 11000 ms

Total duration: approximately 11 seconds.
The waiting does not block the browser.
*/