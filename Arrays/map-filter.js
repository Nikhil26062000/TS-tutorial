var number2 = [10, 20, 30, 4, 50];
var newNumber2Array = number2.map(function (val) { return val * 2; });
console.log(newNumber2Array);
var numberToString = number2.map(function (val) { return val.toString(); });
console.log("This is conversion of number to string", numberToString);
var numGreaterThan = number2.filter(function (val) { return val > 20; });
console.log(numGreaterThan);
