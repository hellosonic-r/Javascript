let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let answer = 0;

const map = new Map();

while (right < n) {
  map.set(arr[right], (map.get(arr[right]) || 0) + 1);

  while (map.get(arr[right]) > m) {
    map.set(arr[left], map.get(arr[left]) - 1);
    left++;
  }

  answer = Math.max(answer, right - left + 1);

  right++;
}

console.log(answer);
