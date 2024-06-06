// Define an abstract class
abstract class Animal {
  constructor(public name: string) {}

  // Abstract method (no implementation)
  abstract speak(): void;

  // Regular method
  move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// Derived class extending the abstract class
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  // Implement the abstract method
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

// Another derived class extending the abstract class
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  // Implement the abstract method
  speak(): void {
    console.log(`${this.name} meows.`);
  }
}

// Usage
const dog = new Dog("Buddy");
dog.speak(); // Outputs: Buddy barks.
dog.move(10); // Outputs: Buddy moved 10m.

const cat = new Cat("Whiskers");
cat.speak(); // Outputs: Whiskers meows.
cat.move(5); // Outputs: Whiskers moved 5m.
