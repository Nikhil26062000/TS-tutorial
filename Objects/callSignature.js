var student1 = {
    name: "Nikhil",
    age: 28,
    gender: "male",
    greet: function (country) { return "Welcom ".concat(student1.name, " to ").concat(country); }
};
var student2 = {
    name: "Ayush",
    age: 28,
    gender: "India",
    greet: function (country) { return "Welcom ".concat(student2.name, " to ").concat(country); }
};
console.log(student1.greet("India"));
console.log(student2.greet("India"));
