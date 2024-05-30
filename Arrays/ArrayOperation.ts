

let number:number[] = [1,4,6,7]
const lengthOfArray:number = number.push(6)
console.log(lengthOfArray);
console.log(number);
for(const num of number){
    console.log(num);
    
}

console.log("using for each method");
number.forEach((val)=>console.log(val))


