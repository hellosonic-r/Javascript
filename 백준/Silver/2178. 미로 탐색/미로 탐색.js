let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = [];

for (let i = 1; i <= n; i++) {
    board.push(input[i].split('').map(Number))
}

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const visited = Array.from({ length: n }, () => Array(m).fill(0));

const bfs = (sx, sy) => {
    const queue = [];
    queue.push([sx, sy]);
    visited[sy][sx] = 1;

    while (queue.length !== 0) {
        const [x, y] = queue.shift();
        if (x === m - 1 && y === n - 1) {
            console.log(visited[y][x]);
            break;
        }
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                if (board[ny][nx] === 1 && !visited[ny][nx]) {
                    queue.push([nx, ny])
                    visited[ny][nx] = visited[y][x] + 1;
                }
            }
        }
    }
}

bfs(0, 0);
