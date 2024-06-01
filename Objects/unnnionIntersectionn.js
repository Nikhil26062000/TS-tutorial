// Union 
//?  ------------------------------------------------------------------------------ >
//?      🔥 Question : If the input value is number then return its double 
//?      😱 if it is string return it in uppercase
//?  ------------------------------------------------------------------------------->
var convertInto = function (value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    throw new Error("Invalid input value");
};
console.log(convertInto(2));
console.log(convertInto("nikhil"));
