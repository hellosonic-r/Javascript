let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 4 6
// 101111
// 101010
// 101011
// 111011

const [n, m] = input[0].split(" ").map(Number);
const board = [];

for (let i = 0; i < n; i++) {
  board.push(input[i + 1].split("").map(Number));
}

const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

console.log(bfs(0, 0))

function bfs(sx, sy) {
  const queue = [];
  queue.push([sx, sy]);
  visited[sy][sx] = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (x === m-1 && y === n-1) return visited[y][x];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
      else {
        if (visited[ny][nx] === 0 && board[ny][nx] === 1) {
          visited[ny][nx] = visited[y][x] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

