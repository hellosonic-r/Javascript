let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

//0 5 5 -5
// 0(0) 5(1) = 5(2)
// 0(0) 5(2) = 5(1)
// -5 5 = 0
//ans : 3
const visited = Array.from({ length: n }, () => false);
for (let i = 0; i < n; i++) {
  answer += twoSum(arr, arr[i], i);
}
console.log(answer);

function twoSum(arr, target, targetIndex) {
  let left = 0;
  let right = n - 1;
  let cnt = 0;
  while (left < right) {
    if (left === targetIndex) {
      left++;
      continue;
    }
    if (right == targetIndex) {
      right--;
      continue;
    }
    if (arr[left] + arr[right] === target) {
      if (!visited[targetIndex]) {
        visited[targetIndex] = true;
        // console.log(arr[left], ":", left, arr[right], ":", right);
        cnt += 1;
      }
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else {
      right--;
    }
  }

  return cnt;
}
