let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 3 1
// 1 1 1

let left = 0;
let sum = 0;
let answer = Infinity;
// 5 1 3
for (let right = 0; right < n; right++) {
  sum += arr[right]; // 1
  while (sum >= s) {
    if (answer > right - left + 1) {
      answer = right - left + 1;
    }

    sum -= arr[left];
    left++;
  }
}
console.log(answer === Infinity ? 0 : answer);
