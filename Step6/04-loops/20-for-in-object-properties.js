// for...in gives the property names of an object.
// Use bracket notation to read the value of each property.

/*
Syntax:

for (let property in object) {
    console.log(property);
    console.log(object[property]);
}
*/

// Publisher, price and edition details are sample training data.
let bookDetails = {
    bookName: "Gitanjali",
    bookAuthor: "Rabindranath Tagore",
    bookPublisher: "Sample Publisher",
    bookPrice: 250,
    bookPublicationDate: "2018-01-01",
    bookEdition: "Sample Edition"
};

for (let property in bookDetails) {
    console.log("Property Name:", property);
    console.log("Property Value:", bookDetails[property]);
}

// Example output:
// Property Name: bookName
// Property Value: Gitanjali
// Property Name: bookAuthor
// Property Value: Rabindranath Tagore
// ...continues for the remaining properties.

// bookDetails[property] uses the current property name.
// bookDetails.property looks for a key literally named "property".

// for...in can also include inherited enumerable properties.
// This example uses a simple object with its own data properties.

// Prefer for...of when you want the values of an array.