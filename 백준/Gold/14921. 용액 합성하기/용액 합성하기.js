let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = n - 1;

let min = Infinity;
let answer = Infinity

while (left < right) {
  const sum = arr[left] + arr[right];
  const absSum = Math.abs(sum);

  if (min > absSum) {
    min = absSum;
    answer = sum
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(answer);
