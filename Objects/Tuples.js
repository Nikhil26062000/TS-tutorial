var person1 = ["Nihil", 20, true];
var person2 = ["Ayush", 18, false];
var displayPersonInfo = function (person1) {
    var name = person1[0], age = person1[1], hasDrivingLicense = person1[2];
    return "This is ".concat(name, " and it has driving license ").concat(hasDrivingLicense ? "Yes" : "No");
};
person1.push("coding");
console.log(person1);
console.log(displayPersonInfo(person1));
console.log(displayPersonInfo(person2));
