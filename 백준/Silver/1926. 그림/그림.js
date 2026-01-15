//한 줄 입력

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let num = Number(input);

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// 여러 줄 입력

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = [];

for (let i = 1; i <= n; i++) {
  board.push(input[i].split(" ").map(Number));
}

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const visited = Array.from({ length: n }, () => Array(m).fill(0));
let count = 0;
let maxArea = 0;

const bfs = (sx, sy) => {
  const queue = [];
  queue.push([sx, sy]);
  visited[sy][sx] = 1;
  let area = 1;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
      else {
        if ((visited[ny][nx] === 0) & (board[ny][nx] === 1)) {
          queue.push([nx, ny]);
          visited[ny][nx] = 1;
          area++;
        }
      }
    }
  }
  if (area > maxArea) {
    maxArea = area;
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1 && visited[i][j] === 0) {
      bfs(j, i);
      count++;
    }
  }
}

console.log(count);
console.log(maxArea);
