let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const isPrime = Array(n + 1).fill(true)
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= n; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= n ;j += i) {
      isPrime[j] = false;
    }
  }
}

const arr = [];
for (let i = 2; i <= n; i++) {
  if (isPrime[i]) arr.push(i);
}

let cnt = 0;
let sum = 0;
let left = 0;
for (let right = 0; right < arr.length; right++) {
  sum += arr[right];
  while (sum > n) {
    sum -= arr[left];
    left++;
  }
  if (sum === n) cnt++;
}

console.log(cnt);
