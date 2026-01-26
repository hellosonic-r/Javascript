let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

arr.sort((a,b) => a-b);

let left = 0;
let right = arr[arr.length - 1];

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        cnt += Math.floor( arr[i] / mid)
    }

    if (cnt >= m) {
        left = mid + 1
    } else {
        right = mid - 1;
    }
}

console.log(right); 