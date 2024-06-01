// Union
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    age: 28,
};
var MyLocation = {
    city: "XYX",
    country: "India",
};
var MyInroduction = function (User1, MyLocation) {
    //   return `Hello My Name is ${User1.name} and I am ${User1.age} and I live in ${MyLocation.city} which is in ${MyLocation.country}`;
    return __assign(__assign({}, User1), MyLocation); // by this way we r returning data from both type MyUser & MyLocation
};
var TotalInformations = MyInroduction(User1, MyLocation); // here we are ensuring that the data which is coming is from both type MyUser & MyLocation i:e Intersectio
console.log(TotalInformations);
