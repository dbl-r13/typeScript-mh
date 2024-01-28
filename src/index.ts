type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}

let age: number = 36;
if (age < 50) {
  age += 10;
}
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
let numbers: number[] = [1, 2, 3];
// Object Type
let obj = {
  hello: "world",
  numbers: numbers,
};

let employee: Employee = { id: 1, name: "", retire: (date:Date) => console.log(date) };

// Tuples Type
let user: [number, string] = [1, "Ryan"];

// Enum Type
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;

// Functions Type
function render(document: number[]) {
  console.log(...document);
}

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

numbers.forEach((n) => console.log(n));

render(obj.numbers);
console.log("My Size: ", mySize);

calculateTax(10000, 2023);
