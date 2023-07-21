const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    var inputNumber = Number(input[0]);
    for (var i = 1; i < inputNumber+1; i++){
        console.log('*'.repeat(i));
    }
});