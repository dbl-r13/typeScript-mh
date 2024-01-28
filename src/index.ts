let age: number = 36;
if (age<50){
    age += 10
};
console.log(age);

// Number Type
let sales = 123456789;
// String Type
let course = "TypeScript";
// Boolean Type
let isPublished = true;
// By default, if not initialized, it is any Type
let level; 
// Array of Numbers
let numbers:number[] = [1,2,3];
// Object Type
let obj = {
    "hello": "world",
    "numbers": numbers
};

// Tuples Type
let user:[number, string] = [1,"Ryan"];

// Enum Type
enum Size{ Small=1, Medium, Large }
let mySize: Size = Size.Medium

function render(document:number[]){
    console.log(...document)
}


numbers.forEach(n => console.log(n))

render(obj.numbers)
console.log("My Size: ", mySize);


