class UserPerson {
    name: string;
    private _age: number | undefined;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public setAge(age: number): void {
      this._age = age;
    }
  
    public getAge(): number | undefined {
      return this._age;
    }
}
  
const users1 = new UserPerson("Nikhil");
users1.setAge(12);
console.log(users1.getAge());
console.log(users1);
  