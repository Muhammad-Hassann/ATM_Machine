#! /usr/bin/env node 
import inquirer from "inquirer";
let balance = 10000;
let mypin = 1234;
// Ask pin
let pinAns = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
// If pin correct then
if (pinAns.pin === mypin) {
    console.log(`Your current balance is ${balance}`);
    let actionAns = await inquirer.prompt([
        {
            name: "action",
            message: "Please choose one option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    // Withdraw Option
    if (actionAns.action === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter the amount",
                type: "number",
            }]);
        // Condition if amount is greater than balance
        if (amountAns.amount > balance) {
            console.log("Insufficient Balance");
        }
        else {
            balance -= amountAns.amount;
            console.log(`Your remaining balance is ${balance}`);
        }
    }
    // Check Balance Option    
    else if (actionAns.action === "Check Balance") {
        console.log(balance);
    }
    // Fast Cash Option
    else if (actionAns.action === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        if (fastCashAns.fastCash === 1000) {
            balance -= 1000;
            console.log(`Your remaining balance is ${balance}`);
        }
        else if (fastCashAns.fastCash === 2000) {
            balance -= 2000;
            console.log(`Your remaining balance is ${balance}`);
        }
        else if (fastCashAns.fastCash === 5000) {
            balance -= 5000;
            console.log(`Your remaining balance is ${balance}`);
        }
        else {
            balance -= 10000;
            console.log(`Your remaining balance is ${balance}`);
        }
    }
}
else {
    console.log("Incorrect Pin");
}
