let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const arrA = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arrB = input[2].split(" ").map(Number);

const map = new Map();

arrA.forEach((num) => {
  map.set(num, false);
});

arrB.forEach((target) => {
  if (binarySearch(arrA, target)) map.set(target, true);
});

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return target;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

const result = [...map]
const answer = [];

for (let i = 0; i < a; i++) {
    const [num, isVisited] = result[i];
    if (!isVisited) answer.push(num);
}

if (answer.length === 0) {
    console.log(0);
} else {
    console.log(answer.length);
    console.log(answer.join(' '))
}