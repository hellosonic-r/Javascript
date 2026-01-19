let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const a = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const m = Number(input[2]);
const arr = input[3].split(' ').map(Number);

// console.log(n);
// console.log(a);
// console.log(m);
// console.log(arr);

const result = [];

arr.forEach((num) => {
  let start = 0;
  let end = n - 1;
  let isNumberInArray = false;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (num < a[mid]) {
      end = mid - 1;
    } else if (num > a[mid]) {
      start = mid + 1;
    } else {
      isNumberInArray = true;
      break;
    }
  }
  if (isNumberInArray) result.push(1);
  else result.push(0);
});

console.log(result.join('\n'));
