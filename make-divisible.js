
const prompt = require('prompt-sync')();
let x = prompt("Please enter a number for 'x': ");
let y = prompt("Please enter a number for 'y': ");
let numX = Number(x);
let numY = Number(y);

if (numX % numY === 0) {
    console.log(numX, "is divisible by ", numY)
}


while (numX % numY !== 0) {
    numX = numX + 1
    console.log(x, "is not divisible by", y)
    if (numX % numY === 0) {
        console.log(numX, "is divisible by ", numY)
    }
}

