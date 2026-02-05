let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const newArr = [];

for (let num of arr) {
  if (newArr.length === 0 || newArr[newArr.length - 1] < num) {
    newArr.push(num);
  } else {
    let left = 0;
    let right = newArr.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (newArr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    newArr[left] = num;
  }
}

console.log(newArr.length);

// [10 20]
