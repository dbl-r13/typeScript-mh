let age: number = 36;
if (age<50){
    age += 10
};
console.log(age);

let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level; 
let numbers:number[] = [1,2,3]
let obj = {
    "hello": "world",
    "numbers": numbers
};
let user:[number, string] = [1,"Ryan"];

function render(document:number[]){
    console.log(...document)
}


numbers.forEach(n => console.log(n))

render(obj.numbers)

