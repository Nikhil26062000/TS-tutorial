
class MathOperations {
    public static PI = Math.PI;
    static add(num1:number, num2:number):number{
        return num1 + num2;
    }
    static subtract(num1:number, num2:number):number{
        return num1 - num2;
    }
}

console.log(MathOperations.add(2,5));
console.log(MathOperations.subtract(5,2));

