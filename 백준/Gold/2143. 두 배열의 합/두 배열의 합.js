let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const t = Number(input[0]);
const n = Number(input[1]);
const arrA = input[2].split(" ").map(Number);
const m = Number(input[3]);
const arrB = input[4].split(" ").map(Number);

const sumArrA = getSubarraySums(arrA);
const sumArrB = getSubarraySums(arrB).sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < sumArrA.length; i++) {
  const target = t - sumArrA[i];
  answer += upperBound(sumArrB, target) - lowerBound(sumArrB, target);
}

console.log(answer);

function getSubarraySums(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      result.push(sum);
    }
  }
  return result;
}

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
