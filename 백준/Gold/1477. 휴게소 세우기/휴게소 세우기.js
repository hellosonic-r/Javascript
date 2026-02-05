let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const arr = n === 0 ? [] : input[1].split(" ").map(Number);

arr.push(0);
arr.push(k);
arr.sort((a, b) => a - b);

let answer = 0;
let left = 1;
let right = k;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cnt = 0;

  for (let i = 1; i < arr.length; i++) {
    const gap = arr[i] - arr[i - 1];
    cnt += Math.floor((gap - 1) / mid);
  }

  if (cnt <= m) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);