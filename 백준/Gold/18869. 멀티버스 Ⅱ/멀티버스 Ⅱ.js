let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(' ').map(Number);

const result = [];
for (let i = 1; i < n + 1; i++) {
    const arr = input[i].split(' ').map(Number);
    const sortedArr = [...arr].sort((a, b) => a - b);
    let temp = ""
    arr.forEach(num => {
        temp += binarySearch(sortedArr, num)
    })
    result.push(temp);
}

let cnt = 0;

for (let i = 0; i<result.length-1; i++) {
    for (let j = i + 1; j < result.length; j++) {
        if (i == j) continue
        if (result[i] === result[j]) {
            cnt += 1;}
    }
}

console.log(cnt);

function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid.toString();
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }   
}

