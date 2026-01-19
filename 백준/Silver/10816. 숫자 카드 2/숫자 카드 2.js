let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arrA = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const m = Number(input[2]);
const arrB = input[3].split(' ').map(Number);

const map = new Map();

for (let i = 0; i < n; i++) {
  map.set(arrA[i], (map.get(arrA[i]) || 0) + 1);
}

const result = [];

for (let i = 0; i < m; i++) {
  result.push(binarySearch(arrA, arrB[i]));
}

console.log(result.join(' '));

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let cnt = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      cnt = map.get(arr[mid]);
      break;
    }
  }

  return cnt;
}
