var number = [1, 4, 6, 7];
var lengthOfArray = number.push(6);
console.log(lengthOfArray);
console.log(number);
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var num = number_1[_i];
    console.log(num);
}
console.log("using for each method");
number.forEach(function (val) { return console.log(val); });
