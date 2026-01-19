let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const a = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const m = Number(input[2]);
const arr = input[3].split(' ').map(Number);
const result = [];

arr.forEach((num) => {
  result.push(binarySearch(a, num));
});

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return 1;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
}

console.log(result.join('\n'));
