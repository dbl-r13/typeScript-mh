import { Person } from "./Person";
export class Student extends Person {
  constructor(
    public studentId: number,
    firstName: string,
    lastName: string,
    age: number
  ) {
    super(firstName, lastName, age);
  }
  get takeTest(){
    return `${this.fullName} is currently taking a test. \n SSHHHHHH!!!!`;
    
  }
}
