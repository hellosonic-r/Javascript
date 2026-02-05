let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arrA = [];
const arrB = [];
const arrC = [];
const arrD = [];
for (let i = 1; i < n + 1; i++) {
  const arr = input[i].split(" ").map(Number);
  arrA.push(arr[0]);
  arrB.push(arr[1]);
  arrC.push(arr[2]);
  arrD.push(arr[3]);
}

let answer = 0;
const map = new Map();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const sum = arrA[i] + arrB[j];
    map.set(sum, map.get(sum) + 1 || 1);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const sum = arrC[i] + arrD[j];
    answer += map.get(-sum) || 0;
  }
}

console.log(answer);
