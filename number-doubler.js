
const prompt = require('prompt-sync')();
let n = prompt("Please enter a number: ");

console.log(n);

while (n <= 100){
    
    n = n * 2
    console.log(n);
}