function delayGetGeethanjaliBookDetails() {
    return new Promise((resolve) => {
        console.log("Please wait 5 seconds...");

        setTimeout(() => {
            resolve("Geethanjali was written in 1910");
        }, 5000);
    });
}

async function getAuthorDetails() {
    console.log("Author Name is Rabindranath Tagore");
    console.log("Kabuliwala was written in 1892");

    delayGetGeethanjaliBookDetails().then((response) => {
        console.log("Response is", response);
    });

    // This runs before the delayed book details arrive.
    console.log(
        "Now confirm that above are Rabindranath Tagore book(s)"
    );
}

getAuthorDetails();