// An async function always returns a Promise.

async function getAuthorDetails() {
    return "Rabindranath Tagore";
}

let result = getAuthorDetails();

console.log(result);
// Promise fulfilled with "Rabindranath Tagore"