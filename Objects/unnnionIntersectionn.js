// Union
//?  ------------------------------------------------------------------------------ >
//?      🔥 Question : If the input value is number then return its double
//?      😱 if it is string return it in uppercase
//?  ------------------------------------------------------------------------------->
var convertInto = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    throw new Error("Invalid input value");
};
console.log(convertInto(2));
console.log(convertInto("nikhil"));
var employee = {
    name: "nikhil",
    age: 30,
    empId: 2022,
};
var officeEmployee = {
    name: "Nikk",
    age: 34,
    empId: 2343,
    departmentId: 2122,
};
var User1 = {
    name: "Nikhil raj",
    age: 28
};
var MyLocation = {
    city: "XYX",
    country: "India"
};
var MyInroduction = function (User1, MyLocation) {
    return "Hello My Name is ".concat(User1.name, " and I am ").concat(User1.age, " and I live in ").concat(MyLocation.city, " which is in ").concat(MyLocation.country);
};
console.log(MyInroduction(User1, MyLocation));
