"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("../classes/Account");
const Ride_1 = require("../classes/Ride");
let age = 36;
if (age < 50) {
    age += 10;
}
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level;
let numbers = [1, 2, 3];
let obj = {
    hello: "world",
    numbers: numbers,
    sales,
    course,
    isPublished,
    level
};
let employee = {
    id: 1,
    name: "",
    retire: (date) => console.log(date),
};
let user = [1, "Ryan"];
let mySize = 2;
function render(document) {
    console.log(...document);
}
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
numbers.forEach((n) => console.log(n));
render(obj.numbers);
console.log("My Size: ", mySize);
calculateTax(10000, 2023);
let account = new Account_1.Account(1, 0, "dbl.r13");
console.log(account.balance);
console.log(user, employee);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Ryan";
seats.A2 = "Mosh";
let ride1 = new Ride_1.Ride();
ride1.start();
let ride2 = new Ride_1.Ride();
ride2.start();
console.log("Active Rides: ", Ride_1.Ride.activeRides);
//# sourceMappingURL=index.js.map