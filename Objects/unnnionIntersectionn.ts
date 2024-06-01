// Union

//?  ------------------------------------------------------------------------------ >
//?      🔥 Question : If the input value is number then return its double
//?      😱 if it is string return it in uppercase
//?  ------------------------------------------------------------------------------->

const convertInto = (value: string | number): string | number => {
  if (typeof value === "number") {
    return value * 2;
  }
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  throw new Error(`Invalid input value`);
};

console.log(convertInto(2));
console.log(convertInto("nikhil"));

//?  ------------------------------------------------------------------------------ >
//?      😁 Another example of Union
//?  ------------------------------------------------------------------------------->

type Person = {
  name: string;
  age: number;
};

type Employee = {
  empId: number;
  departmentId: number;
};

type EmployeeDetails = Person | Employee;

const employee: EmployeeDetails = {
  name: "nikhil",
  age: 30,
  empId: 2022,
};

//! note : In union atleast we have to write all the data for atleast one type . either Person or Employee or both but we have to write all the field of that type.

//!const employee:EmployeeDetails = {
//!    name:"nikhil",
//!    age:30,
//!    empId:2022

//!    }  here i am writing name ,age,empId and this is fine . here i have written all the field from Person and only one field "empId" from Employee  and this is fine but if i write only one field from Person type and only one field from Employee type then this is not correct in Union . I HAVE TO  WRITE ALL THE FIELDS OF ATLEAST ONE OF THE TYPE

// Intersection

type officeEmployeedetails = Person & Employee;

const officeEmployee: officeEmployeedetails = {
  name: "Nikk",
  age: 34,
  empId: 2343,
  departmentId: 2122,
};

//! note : In Intersection we have to write field from both type . If i dont write any one field from any of the type then this is not acceptable in Intersection

//? ------------------------------------------------->
//?     😘💖 Example Question on Intersection
//? ------------------------------------------------->

type MyUser = {
  name: string;
  age: number;
};

type MyLocation = {
  city: string;
  country: string;
};

const User1: MyUser = {
  name: "Nikhil raj",
  age: 28,
};

const MyLocation: MyLocation = {
  city: "XYX",
  country: "India",
};

const MyInroduction = (User1: MyUser, MyLocation: MyLocation) => {
  //   return `Hello My Name is ${User1.name} and I am ${User1.age} and I live in ${MyLocation.city} which is in ${MyLocation.country}`;
  return { ...User1, ...MyLocation }; // by this way we r returning data from both type MyUser & MyLocation
};

const TotalInformations: MyUser & MyLocation = MyInroduction(User1, MyLocation); // here we are ensuring that the data which is coming is from both type MyUser & MyLocation i:e Intersectio
console.log(TotalInformations);
