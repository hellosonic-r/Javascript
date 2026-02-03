let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
// const sortedArr = [...arr].sort((a,b) => a-b);

let min = Infinity;
let first = 0;
let second = 0;
let third = 0;

for (let i = 0; i < n; i++) {
  twoSum(arr, arr[i], i);
}
function twoSum(arr, target, targetIndex) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (left === targetIndex) {
      left++;
      continue;
    }
    if (right === targetIndex) {
      right--;
      continue;
    }
    const sum = arr[left] + arr[right] + target;
    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      first = arr[left];
      second = target;
      third = arr[right];
    } 

    if (sum < 0) {
      left++
    } else {
      right--
    }
  }
}

console.log([first, second, third].sort((a, b) => a - b).join(" "));
