

type PersonInfo = readonly[string , number,boolean] //  readonly will set tuple immutable


const person1:PersonInfo = ["Nihil",20,true];
const person2:PersonInfo = ["Ayush",18,false]

const displayPersonInfo = (person1:PersonInfo) => {
    const [name,age,hasDrivingLicense] = person1;
    return `This is ${name} and it has driving license ${hasDrivingLicense ? "Yes" : "No"}`
}


console.log(displayPersonInfo(person1));
console.log(displayPersonInfo(person2));
