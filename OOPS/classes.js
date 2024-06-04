var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduction = function () {
        return "Hello I am ".concat(this.name, " and I am ").concat(this.age, " yrs old and.I love ").concat(this.hobbies.join("/"));
    };
    return Persons;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Students.prototype.introduction = function () {
        return "".concat(_super.prototype.introduction.call(this), " and My grade is ").concat(this.grade);
    };
    return Students;
}(Persons));
var persons1 = new Persons("Nikhil", 10, ["reading", "writing"]);
console.log(persons1);
var persons2 = new Persons("Ayush", 20, ["read", "writing"]);
console.log(persons2);
var persons3 = new Persons("Nisha", 10, ["Macrame", "writing"]);
console.log(persons3);
var students1 = new Students("Amit", 10, ["coding", "running"], 10);
console.log(students1.introduction());
