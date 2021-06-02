  
const prompt = require('prompt-sync')();
const n = prompt("Please enter a number: ");
let n1 = 0, n2=1, nextIn;

console.log(n1);
console.log(n2);

nextIn = n1 + n2;

while (nextIn <= n) {
    console.log(nextIn);

    n1=n2
    n2 = nextIn
    nextIn = n1+n2
}