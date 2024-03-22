#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let calculator = await inquirer.prompt([
  //First number input 
  {
  type:'number',
  name:"num1",
  message:"Enter your first number"
  },
  //Select operator
  {
  type:"list",
  choices:["Addition","Subtraction","Multiplication","Division","Reminder"],
  name:'operator',
  message:"Select your operator for Calculation"
  },
  // Second number input
  {
    type:'number',
    name:"num2",
    message:"Enter your second number"
  }
]);

//using if else statements and comparision operators

if(calculator.operator === "Addition"){
  console.log(chalk.bgBlueBright(calculator.num1 + calculator.num2));
}else if(calculator.operator === "Subtraction"){
  console.log(chalk.bgGreenBright(calculator.num1 - calculator.num2));
}else if(calculator.operator === "Multiplication"){
  console.log(chalk.bgRedBright(calculator.num1 * calculator.num2));
}else if(calculator.operator === "Division"){
  console.log(chalk.bgYellow(calculator.num1 / calculator.num2));
}else if(calculator.operator === "Reminder"){
  console.log(chalk.bgCyanBright(calculator.num1 % calculator.num2));
}else{
  console.log(chalk.bgRed("Invalid Operator"));
}


