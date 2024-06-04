

interface Greet {
    name : string;
    age : number
}

const greeting : Greet = {
    name : 'Nikhil Raj',
    age : 10
}


//? ---------------------------------------------------------->
//?        🔥 Practice Problem 😜
//? ---------------------------------------------------------->


interface Product {
    name : string;
    price : number,
    quantity : number
}

const product1 : Product = {
    name : 'Laptop',
    price : 20000,
    quantity : 2
}

const calcuateTotalPrice = (product1:Product):number => {
    const {price , quantity} = product1
    return price * quantity
}

console.log(calcuateTotalPrice(product1));
