
const prompt = require('prompt-sync')();
let n = prompt("Please enter a string: ");

console.log(n);

while (n.length <= 10 ) {
    n = n + n
    console.log(n);
}

