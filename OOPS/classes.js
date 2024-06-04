var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var persons1 = new Persons("Nikhil", 10, ["reading", "writing"]);
console.log(persons1);
var persons2 = new Persons("Ayush", 20, ["read", "writing"]);
console.log(persons2);
var persons3 = new Persons("Nisha", 10, ["Macrame", "writing"]);
console.log(persons3);
