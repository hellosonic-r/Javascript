let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i < n + 1; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let max = 0;

let left = 1;
let right = arr[n - 1] - arr[0];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (canInstall(arr, mid)) {
    max = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(max);

function canInstall(arr, target) {
  let cnt = 1;
  let last = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] - last >= target) {
      cnt++;
      last = arr[i];
    }
  }
  return cnt >= k;
}
