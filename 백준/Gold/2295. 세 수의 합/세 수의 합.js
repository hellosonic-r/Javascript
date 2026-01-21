let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

const arr = [];

for (let i = 1; i < n + 1; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);
const sumArr = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    sumArr.push(arr[i] + arr[j]);
  }
}

sumArr.sort((a, b) => a - b);

for (let i = n - 1; i >= 0; i--) {
  for (let j = 0; j < n; j++) {
    const target = arr[i] - arr[j];
    if (binarySearch(sumArr, target)) {
      console.log(target + arr[j]);
      return;
    }
  }
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return target;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}
