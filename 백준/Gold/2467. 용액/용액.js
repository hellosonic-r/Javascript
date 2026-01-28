let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let min = Infinity;
let resultLeft;
let resultRight;

let left = 0;
let right = n - 1;

while (left < right) {
  const sum = Math.abs(arr[left] + arr[right]);
  if (min > sum) {
    min = sum;
    resultLeft = arr[left];
    resultRight = arr[right];
  }
  if (arr[left] + arr[right] >= 0) {
    right--;
  } else {
    left++;
  }
}

console.log(resultLeft, resultRight);
