let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = 0;
let right = 0;
let cnt = 0;
let eraseCount = 0;
// 1 2 3 4 5 6 7 8
for (let left = 0; left < n; left++) {
  while (right < n) {
    if (arr[right] % 2 !== 0) {
      if (eraseCount === k) break;
      eraseCount++;
    } else cnt += 1;
    right++;
  }
  // console.log(cnt)
  answer = Math.max(answer, cnt);
  if (arr[left] % 2 !== 0) {
    eraseCount--;
  } else {
    cnt--;
  }
}

console.log(answer);
