"use strict";
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
class Account {
    constructor(id, _balance, owner) {
        this.id = id;
        this._balance = _balance;
        this.owner = owner;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 0, "dbl.r13");
console.log(account);
//# sourceMappingURL=index.js.map