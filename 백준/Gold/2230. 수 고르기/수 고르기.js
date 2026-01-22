let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(Number(input[i+1]));
}

arr.sort((a,b) => a-b);

let min = Infinity

let left = 0;
let right = 0;
while (right < n) {
    const gap = arr[right] - arr[left];
    if (gap >= m) {
        if (gap < min) min = gap
        left++
    } else {
        right++
    }
}

console.log(min)