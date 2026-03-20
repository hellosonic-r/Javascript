let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const board = [];
for (let i = 1; i < n + 1; i++) {
  board.push(input[i].split('').map(Number));
}

const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0),
);

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

console.log(bfs(0, 0));

function bfs(sx, sy) {
  const queue = [];
  queue.push([sx, sy]);
  visited[sy][sx] = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx < 0 ||
        nx >= m ||
        ny < 0 ||
        ny >= n ||
        board[ny][nx] === 0 ||
        visited[ny][nx] !== 0
      )
        continue;
      else {
        visited[ny][nx] = visited[y][x] + 1;
        if (nx === m - 1 && ny === n - 1) return visited[ny][nx];
        queue.push([nx, ny]);
      }
    }
  }
}
