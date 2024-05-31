

type Student = {
    name : string;
    age : number;
    gender : string;
    greet: (country: string) =>string  //A call signature in TypeScript describes the parameters and return type of a function or method. In this case, (country: string) => string describes a function that takes a single parameter country of type string and returns a string.
}

const student1 : Student = {
    name : "Nikhil",
    age : 28,
    gender : "male",
    greet: (country: string):string =>`Welcom ${student1.name} to ${country}` 
}

const student2 : Student = {
    name : "Ayush",
    age : 28,
    gender : "India",
    greet: (country: string):string =>`Welcom ${student2.name} to ${country}` 
}

console.log(student1.greet("India"));
console.log(student2.greet("India"));
