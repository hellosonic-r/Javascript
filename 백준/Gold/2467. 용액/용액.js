let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let min = Infinity
let resultLeft;
let resultRight;

for (let i = 0; i < n - 1; i++) {
  binarySearch(arr, i, arr[i]);
}

resultLeft < resultRight
  ? console.log(resultLeft, resultRight)
  : console.log(resultRight, resultLeft);

function binarySearch(arr, index, currentNum) {
  let left = index + 1;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = Math.abs(arr[mid] + currentNum);
    if (min > sum) {
      min = sum;
      resultLeft = arr[mid];
      resultRight = currentNum;
    }

    if (arr[mid] + currentNum >= 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
