/*
fetch() sends an HTTP request and returns a Promise.
The default request method is GET.

This example retrieves one post from the API.
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        // response contains the HTTP status, headers and body.
        console.log("Response:", response);
        console.log("HTTP Status:", response.status);

        // fetch() does not reject automatically for HTTP errors.
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Read and parse the JSON body.
        // response.json() also returns a Promise.
        return response.json();
    })
    .then((jsonData) => {
        // jsonData is now a JavaScript object.
        console.log("Post Details:", jsonData);

        console.log("User ID:", jsonData.userId);
        console.log("Post ID:", jsonData.id);
        console.log("Title:", jsonData.title);
        console.log("Body:", jsonData.body);
    })
    .catch((error) => {
        // Handles network errors, HTTP errors thrown above,
        // and errors while parsing the JSON.
        console.error("Unable to load the post:", error.message);
    });

// Runs before the API result is available.
console.log("The request has started. Other code can continue.");