
const number2:number[] = [10,20,30,4,50]
const newNumber2Array:number[] = number2.map((val:number)=>val*2)
console.log(newNumber2Array);
const numberToString:string[] = number2.map((val:number)=>val.toString())
console.log("This is conversion of number to string",numberToString);

const numGreaterThan:number[] = number2.filter((val:number)=>val>20)
console.log(numGreaterThan);

