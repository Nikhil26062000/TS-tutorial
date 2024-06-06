var UserPerson = /** @class */ (function () {
    function UserPerson(name) {
        this.name = name;
    }
    UserPerson.prototype.setAge = function (age) {
        this._age = age;
    };
    UserPerson.prototype.getAge = function () {
        return this._age;
    };
    return UserPerson;
}());
var users1 = new UserPerson("Nikhil");
users1.setAge(12);
console.log(users1.getAge());
console.log(users1);
