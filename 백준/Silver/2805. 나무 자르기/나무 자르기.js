let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

arr.sort((a,b) => a-b);

const max = arr[arr.length - 1];

let left = 0;
let right = max;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let length =  0;
    for (let i = 0; i < n; i++) {
        const remainLength = arr[i] - mid;
        if (remainLength > 0) length += remainLength
    }

    if (length >= m) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(right);


