class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    
    isEmpty() {
        return this.rear === this.front;
    }
}

function bfs(sx, queue, graph, visited) {
    visited[sx] = 1;
    queue.enqueue(sx);
    
    while (!queue.isEmpty()) {
        const x = queue.dequeue();
        for (let nx of graph[x]) {
            if (visited[nx] == 0) {
                visited[nx] = visited[x] + 1;
                queue.enqueue(nx);
            }
        }
    }
}

function solution(n, edge) {
    const graph = Array.from( { length : n+1 }, () => []);
    
    for (const [start, end] of edge) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    graph.forEach((element) => {
        element.sort((a,b) => a-b );
    });
    
    console.log(graph);
    
    const queue = new Queue();
    const visited = Array(n+1).fill(0);
    
    bfs(1, queue, graph, visited);
    
    const max = Math.max(...visited);
    let result = 0;
    visited.forEach((element) => {
        if (element == max) {
            result += 1;
        }
    });
    
    return result;
    
    
}