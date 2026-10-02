class ShoppingCart {
    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
    }

    displayProduct() {
        console.log("Product:", this.productName);
    }

    calculateTotal(quantity) {
        return this.price * quantity;
    }
}

let cart = new ShoppingCart("Keyboard", 1500);

cart.displayProduct();

// Pass an argument and store the returned value.
let totalAmount = cart.calculateTotal(2);

console.log("Total Amount:", totalAmount); // 3000