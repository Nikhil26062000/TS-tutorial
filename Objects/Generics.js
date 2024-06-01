var RandomFunction = function (value) {
    return value;
};
console.log(RandomFunction(2));
console.log(RandomFunction("hello world"));
console.log(RandomFunction(true));
//! Below is same code with comments generated from ChatGPT 👍
/*

// This is a TypeScript function called RandomFunction that takes a generic type T as its argument and returns a value of the same type T.
const RandomFunction = <T>(value: T): T => {
  // Returns the value passed to the function.
  return value;
};

// Calls RandomFunction with a number argument (2) and logs the returned value.
console.log(RandomFunction<number>(2));

// Calls RandomFunction with a string argument ("hello world") and logs the returned value.
console.log(RandomFunction("hello world"));

// Calls RandomFunction with a boolean argument (true) and logs the returned value.
console.log(RandomFunction(true));


*/
//? ----------------------------------------------------->
//?     😜👌 Multiple Types in Generics
//? ----------------------------------------------------->
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
var result1 = add(5, "hello"); // here i am writing <number,string> but i i dont write then also it is fine
var result2 = add("world", true);
