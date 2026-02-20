let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const visited = Array.from({ length: 100001 }, () => false);

console.log(bfs(n, 0));

function bfs(location, time) {
  const queue = [];
  queue.push([location, time]);
  visited[location] = true;

  while (queue.length > 0) {
    const [x, t] = queue.shift();
    const dx = [x + 1, x - 1, x * 2];
    if (x === m) return t;

    for (const nx of dx) {
      if (nx < 0 || nx > 100000) continue;
      else {
        if (!visited[nx]) {
          queue.push([nx, t + 1]);
          visited[nx] = true;
        }
      }
    }
  }
}
