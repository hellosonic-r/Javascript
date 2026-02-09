let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const visited = Array.from({length: 10001}, () => false)

let cnt = 0;
let right = 0;
for (let left = 0; left < n; left++) {
  while (right < n && !visited[arr[right]]) {
    visited[arr[right]] = true
    right++
  }

  cnt += (right - left);

  visited[arr[left]] = false;
}

console.log(cnt)