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
// Define an abstract class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // Regular method
    Animal.prototype.move = function (distanceInMeters) {
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
// Derived class extending the abstract class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    // Implement the abstract method
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}(Animal));
// Another derived class extending the abstract class
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    // Implement the abstract method
    Cat.prototype.speak = function () {
        console.log("".concat(this.name, " meows."));
    };
    return Cat;
}(Animal));
// Usage
var dog = new Dog("Buddy");
dog.speak(); // Outputs: Buddy barks.
dog.move(10); // Outputs: Buddy moved 10m.
var cat = new Cat("Whiskers");
cat.speak(); // Outputs: Whiskers meows.
cat.move(5); // Outputs: Whiskers moved 5m.
