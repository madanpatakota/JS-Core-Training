function delayGetGeethanjaliBookDetails() {
    return new Promise((resolve) => {
        console.log("Please wait 5 seconds for Geethanjali details...");

        setTimeout(() => {
            resolve("Geethanjali was written in 1910");
        }, 5000);
    });
}

function delayGetGoraBookDetails() {
    return new Promise((resolve) => {
        console.log("Please wait 5 seconds for Gora details...");

        setTimeout(() => {
            resolve("Gora was written in 1910");
        }, 5000);
    });
}

async function getAuthorDetails() {
    console.log("Author Name is Rabindranath Tagore");
    console.log("Kabuliwala was written in 1892");

    console.time("BookDetails");

    let firstBookDetails = await delayGetGeethanjaliBookDetails();
    console.log(firstBookDetails);

    let secondBookDetails = await delayGetGoraBookDetails();
    console.log(secondBookDetails);

    console.timeEnd("BookDetails");

    console.log(
        "%cNow confirm that above are Rabindranath Tagore book(s)",
        "color: green;"
    );

    return "I received All the data from AuthorDetails";
}

getAuthorDetails().then((response) => {
    console.log(response);
});

// Total duration: approximately 10 seconds.
// await pauses this function while waiting; it does not block the browser.