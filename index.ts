#! /usr/bin/env node
import inquirer from "inquirer"

// Example currency rates relative to USD
const currency: any = {
    USD: 1,    // Base Currency
    EUR: 0.93,
    GBP: 0.79,
    INR: 83.42,
    PKR: 278.50,
    JPY: 0.0063,
    CAD: 0.73,
};

let userAnswer = await inquirer.prompt(
    [
        {
            name: "fromCurrency",
            message: "Enter from Currency:",
            type: "list",
            choices: ["USD","EUR","GBP","INR","PKR","JPY","CAD"],
        },
        {
            name: "toCurrency",
            message: "Enter to Currency:",
            type: "list",
            choices: ["USD","EUR","GBP","INR","PKR","JPY","CAD"],
        },
        {
            name: "amountToConvert",
            message: "Enter your Amount:",
            type: "number",
        }
    ]
);

let fromRate = currency[userAnswer.fromCurrency];
let toRate = currency[userAnswer.toCurrency];
let amountToConvert = userAnswer.amountToConvert;

// Formula for conversion
let baseAmount = amountToConvert/fromRate;  // Convert to USD (base currency)
let convertedAmount = baseAmount * toRate;  // Convert from USD to target currency

console.log("Your Coverted Anount is:", Math.round(convertedAmount));
console.log("\n Thank you! \n");




