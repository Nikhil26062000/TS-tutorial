var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.add = function (num1, num2) {
        return num1 + num2;
    };
    MathOperations.subtract = function (num1, num2) {
        return num1 - num2;
    };
    MathOperations.PI = Math.PI;
    return MathOperations;
}());
console.log(MathOperations.add(2, 5));
console.log(MathOperations.subtract(5, 2));
console.log(MathOperations.PI);
