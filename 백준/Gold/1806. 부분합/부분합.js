let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let sum = 0;
let answer = Infinity;

for (let right = 0; right < n; right++) {
  sum += arr[right];

  while (sum >= s) {
    answer = Math.min(answer, right - left + 1);
    sum -= arr[left];
    left++;
  }
}

console.log(answer === Infinity ? 0 : answer);
