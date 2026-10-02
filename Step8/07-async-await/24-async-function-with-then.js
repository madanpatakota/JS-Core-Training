async function getAuthorDetails() {
    return new Promise((resolve) => {
        resolve("Rabindranath Tagore");
    });
}

let result = getAuthorDetails().then((response) => {
    console.log("Response is", response);
});

// .then() also returns a Promise.
console.log(result);