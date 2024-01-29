"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
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
    get balance() {
        return this._balance;
    }
}
exports.Account = Account;
