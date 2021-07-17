// SuperClass
function Account(agence, account, balance) {
    this.agence = agence;
    this.account = account;
    this.balance = balance;
}
Account.prototype.withdraw = function(value) {
    if(this.balance < value) {
        console.log("Balance insufficient");
        this.seeBalance();
        return;
    }

    this.balance -= value;
    this.seeBalance();
}
Account.prototype.deposit = function(value) {
    this.balance += value;
    this.seeBalance();
}
Account.prototype.seeBalance = function() {
    console.log(`Ag/c: ${this.agence}/${this.account}`);
    console.log(`Balance: R$ ${this.balance.toFixed(2)}`);
}


function CC(agence, account, balance, limit) {
    Account.call(this, agence, account, balance);
    this.limit = limit;
}
CC.prototype = Object.create(Account.prototype);
CC.prototype.constructor = CC;

CC.prototype.withdraw = function(value) {
    if(value > (this.balance + this.limit)) {
        console.log("Insufficient balance");
        this.seeBalance();
        return;
    }

    this.balance -= value;
    this.seeBalance();
}



const c1 = new CC("BB", "CC", 200, 100);
c1.withdraw(100)
c1.withdraw(100)
c1.withdraw(100)
c1.withdraw(100)