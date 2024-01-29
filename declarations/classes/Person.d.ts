export declare class Person {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age: number);
    get fullName(): string;
    get statement(): string;
    walk(): void;
    talk(): void;
}
