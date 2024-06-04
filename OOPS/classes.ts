class Persons {
    name: string ;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    }
  }
  

const persons1 : Persons = new Persons("Nikhil",10,["reading","writing"])
console.log(persons1);
const persons2 : Persons = new Persons("Ayush",20,["read","writing"])
console.log(persons2);
const persons3 : Persons = new Persons("Nisha",10,["Macrame","writing"])
console.log(persons3);
