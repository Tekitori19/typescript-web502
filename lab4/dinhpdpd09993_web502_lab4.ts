// 1. Tạo Interface IBankAccount
interface IBankAccount {
    accountNumber: number;
    // balance: number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
}

// 2. Tạo Class BankAccount Implement IBankAccount
class BankAccount implements IBankAccount {
    public accountNumber: number;
    protected balance: number;
    private pin: string;

    constructor(accountNumber: number, balance: number, pin: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.pin = pin;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (this.validatePin(this.pin)) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            } else {
                console.log("Invalid withdrawal amount.");
            }
        } else {
            console.log("Invalid PIN.");
        }
    }

    getBalance(): number {
        return this.balance;
    }

    private validatePin(pin: string): boolean {
        return this.pin === pin;
    }
}

// 3. Tạo Class SavingAccount extends BankAccount
class SavingAccount extends BankAccount {
    private interestRate: number;

    constructor(accountNumber: number, balance: number, pin: string, interestRate: number) {
        super(accountNumber, balance, pin);
        this.interestRate = interestRate;
    }

    applyInterest(): void {
        const interest = this.balance * (this.interestRate / 100);
        this.balance += interest;
        console.log(`Applied interest. New balance: ${this.balance}`);
    }
}

// 4. Viết Chương Trình Chính
const mySavingAccount = new SavingAccount(123456, 1000, "1234", 5);

mySavingAccount.deposit(500);
mySavingAccount.withdraw(200);
mySavingAccount.applyInterest();
console.log(`Final balance: ${mySavingAccount.getBalance()}`);
