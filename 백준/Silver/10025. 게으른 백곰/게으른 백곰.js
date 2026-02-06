let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const map = new Map();
let answer = 0;
let max = 0;
for (let i = 1; i < n + 1; i++) {
  const [ice, distance] = input[i].split(" ").map(Number);
  if (distance > max) {
    max = distance;
  }
  map.set(distance, ice);
}

let sum = 0;

for (let i = 0; i < k * 2 + 1; i++) {
  sum += map.get(i) || 0;
}
answer = sum;

for (let i = k * 2 + 1; i < max + 1; i++) {
  sum = sum + (map.get(i) || 0) - (map.get(i - (k * 2 + 1)) || 0);
  if (answer < sum) {
    answer = sum;
  }
}

console.log(answer);
