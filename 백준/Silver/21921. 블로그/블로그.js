let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;

for (let i = 0; i < s; i++) {
  sum += arr[i];
}

let max = sum;
let count = 1;

for (let i = s; i < n; i++) {
  sum = sum + arr[i] - arr[i - s];
  if (sum === max) {
    count++;
  } else if (sum > max) {
    max = sum;
    count = 1;
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(count);
}
