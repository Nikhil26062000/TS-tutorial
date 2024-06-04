// Object creation based on `Greet` interface
var greeting = {
    // An object `greeting` is created that adheres to the `Greet` interface.
    name: 'Nikhil Raj',
    age: 10
};
// Object creation based on `Product` interface
var product1 = {
    // An object `product1` is created that adheres to the `Product` interface.
    name: 'Laptop',
    price: 20000,
    quantity: 2
};
// Function to calculate total price (refactored)
var calculateTotalPrice = function (product) {
    // This function takes a product object (adhering to the `Product` interface) as input and returns the total price.
    // Refactored for clarity:
    var price = product.price, quantity = product.quantity; // Destructuring for concise variable names
    return price * quantity;
};
// Function call and output
console.log(calculateTotalPrice(product1)); // This line calls the function with `product1` as an argument and prints the result to the console.
