"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get statement() {
        return `${this.fullName} is ${this.age} years old.`;
    }
    walk() {
        console.log("Walking");
    }
    talk() {
        console.log("Talking");
    }
}
exports.Person = Person;
