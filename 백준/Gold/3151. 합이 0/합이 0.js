let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // a + b + c = 0 // a + b = -c
// console.log(arr);

let answer = 0;
arr.forEach((num, i) => {
  answer += twoPointer(arr, num, i);
});

console.log(answer);
function twoPointer(arr, target, targetIndex) {
  let left = targetIndex + 1;
  let right = arr.length - 1;
  let cnt = 0;
  while (left < right) {
    if (arr[left] + arr[right] + target === 0) {
      const leftValue = arr[left];
      const rightValue = arr[right];

      if (leftValue === rightValue) {
        const k = right - left + 1;
        cnt += (k * (k - 1)) / 2;
        break;
      }

      
      let leftCnt = 1;
      let rightCnt = 1;

      while (left + 1 < right && arr[left] === arr[left + 1]) {
        left++;
        leftCnt++;
      }
      while (left < right - 1 && arr[right] ===  arr[right - 1]) {
        right--;
        rightCnt++;
      }

      cnt += leftCnt * rightCnt;
      left++;
      right--;
    //   console.log(leftValue, rightValue, target);
    } else if (arr[left] + arr[right] + target > 0) {
      right--;
    } else {
      left++;
    }
  }
  return cnt;
}
