let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split("");
const rule = input[2].split(" ").map(Number);

const map = new Map();

for (let i = 0; i < 4; i++) {
  if (i === 0) map.set("A", rule[i]);
  else if (i === 1) map.set("C", rule[i]);
  else if (i === 2) map.set("G", rule[i]);
  else map.set("T", rule[i]);
}

// {‘A’, ‘C’, ‘G’, ‘T’}

// 9 8
// CCTGGATTG
// 2 0 1 1

let ACnt = 0;
let CCnt = 0;
let GCnt = 0;
let TCnt = 0;
let answer = 0;
for (let i = 0; i < k; i++) {
  if (arr[i] === "A") {
    ACnt += 1;
  } else if (arr[i] === "C") {
    CCnt += 1;
  } else if (arr[i] === "G") {
    GCnt += 1;
  } else if (arr[i] === "T") {
    TCnt += 1;
  }
}

if (ACnt >= map.get("A") && CCnt >= map.get("C") && GCnt >= map.get("G") && TCnt >= map.get("T")) {
  answer += 1;
}

for (let i = k; i < n; i++) {
  const first = arr[i - k]
  if (first === "A") ACnt--;
  else if (first === "C") CCnt--;
  else if (first === "G") GCnt--;
  else if (first === "T") TCnt--;

  if (arr[i] === "A") ACnt++;
  else if (arr[i] === "C") CCnt++;
  else if (arr[i] === "G") GCnt++;
  else if (arr[i] === "T") TCnt++;

  if (
    ACnt >= map.get("A") &&
    CCnt >= map.get("C") &&
    GCnt >= map.get("G") &&
    TCnt >= map.get("T")
  ) {
    answer += 1;
  }
}

console.log(answer);