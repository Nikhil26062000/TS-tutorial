// Interface definition for `Greet`
interface Greet {
    // This interface defines the structure of an object representing a person with a name (string) and age (number).
    name: string;
    age: number;
  }
  
  // Object creation based on `Greet` interface
  const greeting: Greet = {
    // An object `greeting` is created that adheres to the `Greet` interface.
    name: 'Nikhil Raj',
    age: 10
  };
  
  // Practice problem marker
  //? ---------------------------------------------------------->
  //?         Practice Problem 
  //? ---------------------------------------------------------->
  // This section serves as a visual indicator for a practice problem.
  
  // Interface definition for `Product`
  interface Product {
    // This interface defines the structure of an object representing a product with a name (string), price (number), and quantity (number).
    name: string;
    price: number;
    quantity: number;
  }
  
  // Object creation based on `Product` interface
  const product1: Product = {
    // An object `product1` is created that adheres to the `Product` interface.
    name: 'Laptop',
    price: 20000,
    quantity: 2
  };
  
  // Function to calculate total price (refactored)
  const calculateTotalPrice = (product: Product): number => {
    // This function takes a product object (adhering to the `Product` interface) as input and returns the total price.
    // Refactored for clarity:
    const { price, quantity } = product; // Destructuring for concise variable names
  
    return price * quantity;
  };
  
  // Function call and output
  console.log(calculateTotalPrice(product1)); // This line calls the function with `product1` as an argument and prints the result to the console.
  