let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = Infinity;
for (let i = 0; i < n - 3; i++) { // 
  for (let j = i + 3; j < n; j++) {
    const target = arr[i] + arr[j];
    let left = i + 1;
    let right = j - 1;
    while (left < right) {
      const compare = Math.abs(target - (arr[left] + arr[right]));
      answer = Math.min(answer, compare);
      const sum = arr[left] + arr[right]
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    //   console.log('answer:',answer,' compare:',compare)
      // 2 3 4 5 6 7 7 8 9 10
      // 0 1 2 3 4 5 6 7 8 9
    }
  }
}

console.log(answer)
