let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = Infinity;
// 5 1 3 5 10 7 4 9 2 8
let initSum = 0;
let left = 0;
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i];
  while (sum >= s) {
    sum -= arr[left];
    answer = Math.min(answer, i - left + 1);
    left++;
  }
}

console.log(answer === Infinity ? 0 : answer);
