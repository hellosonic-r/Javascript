let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

console.log(twoSum(arr, m));

function twoSum(arr, target) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let cnt = 0;
  while (right <= n) {
    if (sum === target) cnt += 1;
    if (sum < target) {
      sum += arr[right++];
    } else {
      sum -= arr[left++];
    }
  }
  return cnt;
}
