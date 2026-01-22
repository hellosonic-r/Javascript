let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [k, n] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 0; i < k; i++) {
  arr.push(Number(input[i + 1]));
}

arr.sort((a, b) => a - b);

let left = 0;
let right = arr[k - 1];
while (left <= right) {
  let cnt = 0;
  const mid = Math.floor((left + right) / 2);
  for (let i = 0; i < k; i++) {
    cnt += Math.floor(arr[i] / mid);
  }

  if (cnt >= n) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }

}
console.log(right);
