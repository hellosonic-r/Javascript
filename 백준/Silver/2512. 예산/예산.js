let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const k = Number(input[2]);

let left = 0;
let right = Math.max(...arr)
let max = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let sum = 0;
  for (let num of arr) {
    if (num > mid) {
      sum += mid;
    } else {
      sum += num;
    }
  }
  if (sum <= k) {
    left = mid + 1;
    if (max < mid) {
      max = mid;
    }
  } else {
    right = mid - 1;
  }
}

console.log(max);
