
// const bankAccount = [accountOwner="Mahmoud Akoum",balance= "15000", accountType= "Individual", phoneNumber="71559322"];

const bankAccount = {
    accountOwner:"Mahmoud Akoum",
    balance:"15000",
    accountType:"Individual",
    phoneNumber:"71559322",
    
    depositBalance: function(balance,amount){
        const newbalance = parseFloat(balance)+ amount;
        return "$" + amount + " has been added to your account. Total: " + "$" + newbalance;
    },
    withdrawBalance: function(balance,amount){
        const newbalance = balance-amount;
        return "$" + amount + " has been reduced from your account. Total: " + "$" + newbalance;
    },
    showInfo: function(){
        return this.accountOwner + " has a/an " + this.accountType + " account with balance " + "$" + this.balance;
    }
};

console.log(bankAccount.depositBalance(bankAccount.balance,7000.5));
console.log(bankAccount.withdrawBalance(bankAccount.balance,1300));
