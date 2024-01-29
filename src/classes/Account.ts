export class Account {
    //     readonly id: number;
    //    private _balance: number;
    //     owner:string;
    nickname?: string;
  
    constructor(
      public readonly id: number,
      private _balance: number,
      public owner: string
    ) {
      // this.id = id;
      // this._balance = balance;
      // this.owner = owner;
    }
  
    deposit(amount: number): void {
      if (amount <= 0) {
        throw new Error("Invalid amount");
      }
      this._balance += amount;
    }
    //   private calculateTax(): number {return 0}
    // Created a getter for the exact balance.
    get balance(): number {
      return this._balance;
    }
  }

