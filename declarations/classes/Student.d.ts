import { Person } from "./Person";
export declare class Student extends Person {
    studentId: number;
    constructor(studentId: number, firstName: string, lastName: string, age: number);
    get takeTest(): string;
}
