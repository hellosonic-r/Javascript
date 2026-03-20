let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const board = [];

for (let i = 1; i < n + 1; i++) {
  board.push(input[i].split(' ').map(Number));
}

const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0),
);

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

let cnt = 0;
let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1 && visited[i][j] === 0) {
      cnt += 1;
      max = Math.max(max, bfs(j, i));
    }
  }
}

console.log(cnt);
console.log(max);

function bfs(sx, sy) {
  let area = 1;
  const queue = [];
  queue.push([sx, sy]);
  visited[sy][sx] = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
      else {
        if (board[ny][nx] === 1 && visited[ny][nx] === 0) {
          queue.push([nx, ny]);
          visited[ny][nx] = visited[y][x] + 1;
          area += 1;
        }
      }
    }
  }
  return area;
}
