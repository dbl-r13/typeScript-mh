export declare class Account {
    readonly id: number;
    private _balance;
    owner: string;
    nickname?: string;
    constructor(id: number, _balance: number, owner: string);
    deposit(amount: number): void;
    get balance(): number;
}
