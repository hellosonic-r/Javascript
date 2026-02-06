let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
let max = 0;

for (let i = 0; i < s; i++) {
  sum += arr[i];
}

max = sum;

for (let i = s; i < n; i++) {
  sum = sum + arr[i] - arr[i - s];
  if (max < sum) {
    max = sum;
  }
}

console.log(max);
