

// Union 

//?  ------------------------------------------------------------------------------ >
//?      🔥 Question : If the input value is number then return its double 
//?      😱 if it is string return it in uppercase
//?  ------------------------------------------------------------------------------->

const convertInto = (value:string|number):string|number => {
    if(typeof value === 'number'){
        return value * 2
    }
    if(typeof value === 'string'){
        return value.toUpperCase()
    }
    throw new Error(`Invalid input value`)
}

console.log(convertInto(2));
console.log(convertInto("nikhil"));


//?  ------------------------------------------------------------------------------ >
//?      😁 Another example of Union
//?  ------------------------------------------------------------------------------->


type Person = {
    name: string;
    age: number;
}

type Employee = {
    empId: number;
    departmentId: number;
}

type EmployeeDetails = Person | Employee 

const employee:EmployeeDetails = {
    name:"nikhil",
    age:30,
    empId:2022

}

//! note : In union atleast we have to write all the data for atleast one type . either Person or Employee or both but we have to write all the field of that type.

//!const employee:EmployeeDetails = {
//!    name:"nikhil",
//!    age:30,
//!    empId:2022

//!    }  here i am writing name ,age,empId and this is fine . here i have written all the field from Person and only one field "empId" from Employee  and this is fine but if i write only one field from Person type and only one field from Employee type then this is not correct in Union . I HAVE TO  WRITE ALL THE FIELDS OF ATLEAST ONE OF THE TYPE






