"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(studentId, firstName, lastName, age) {
        super(firstName, lastName, age);
        this.studentId = studentId;
    }
    get takeTest() {
        return `${this.fullName} is currently taking a test. \n SSHHHHHH!!!!`;
    }
}
exports.Student = Student;
