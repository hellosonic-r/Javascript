let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < k; i++) {
  sum += arr[i];
}

let max = sum;

for (let i = k; i < n; i++) {
  sum = sum + arr[i] - arr[i - k];
  if (max < sum) {
    max = sum;
  }
}

console.log(max);
