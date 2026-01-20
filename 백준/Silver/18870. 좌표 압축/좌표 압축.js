let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const sortedArr = [...arr];
sortedArr.sort((a, b) => a - b);
const map = new Map();

let idx = 0;
sortedArr.forEach((num) => {
  if (map.get(num) === undefined) {
    map.set(num, idx);
    idx += 1;
  }
});

console.log(
  arr
    .map((num) => {
      return map.get(num);
    })
    .join(' '),
);
