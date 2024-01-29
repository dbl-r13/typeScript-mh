export class Person {
    constructor(public firstName:string,
        public lastName: string,
        public age: number){}
            get fullName(){
                return `${this.firstName} ${this.lastName}`
            }
            get statement(){
                return `${this.fullName} is ${this.age} years old.`
            }
            walk(){
                console.log("Walking")
            }
            talk(){
                console.log("Talking")
            }
}