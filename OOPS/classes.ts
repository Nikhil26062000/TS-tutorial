class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduction() {
    return `Hello I am ${this.name} and I am ${
      this.age
    } yrs old and.I love ${this.hobbies.join("/")}`;
  }
}

class Students extends Persons {
  grade: number;
  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }

  introduction() {
    return `${super.introduction()} and My grade is ${this.grade}`;
  }
}

const persons1: Persons = new Persons("Nikhil", 10, ["reading", "writing"]);
console.log(persons1);
const persons2: Persons = new Persons("Ayush", 20, ["read", "writing"]);
console.log(persons2);
const persons3: Persons = new Persons("Nisha", 10, ["Macrame", "writing"]);
console.log(persons3);
const students1 = new Students("Amit", 10, ["coding", "running"], 10);
console.log(students1.introduction());

