var greeting = {
    name: 'Nikhil Raj',
    age: 10
};
var product1 = {
    name: 'Laptop',
    price: 20000,
    quantity: 2
};
var calcuateTotalPrice = function (product1) {
    var price = product1.price, quantity = product1.quantity;
    return price * quantity;
};
console.log(calcuateTotalPrice(product1));
