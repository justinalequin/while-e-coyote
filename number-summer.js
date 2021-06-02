  
const prompt = require('prompt-sync')();
let userInput = prompt("Enter some numbers (type 'done' when complete): ");
let numberUserInput = Number(userInput)


while (userInput !== 'done') {
    userInput = prompt("Enter some numbers (type 'done' when complete): ");
    console.log(userInput);
    if (userInput !== "done"){
    numberUserInput = numberUserInput + Number(userInput)
}
}

const sumFinal =  numberUserInput;
console.log("Your total is " , sumFinal)



