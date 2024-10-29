from collections import deque

def bfs(sx,sy,z):
    queue = deque()
    queue.append((sx,sy,z))

    while queue:
        x,y,z = queue.popleft()
        if (x,y) == (m-1,n-1):
            return visited[n-1][m-1][z]
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx<0 or ny<0 or nx>=m or ny>=n:
                continue
            else:
                if board[ny][nx] == 1 and z == 0:
                    visited[ny][nx][1] = visited[y][x][0] + 1
                    queue.append((nx,ny,1))
                elif board[ny][nx] == 0 and visited[ny][nx][z] == 0:
                    visited[ny][nx][z] = visited[y][x][z] + 1
                    queue.append((nx,ny,z))
    return -1 
                 

n,m = map(int,input().split()) #n:세로 m:가로
board = []
for _ in range(n):
    board.append(list(map(int, str(input()))))

dx = [0,1,0,-1]
dy = [-1,0,1,0]

visited = [[[0]*2 for _ in range(m)] for _ in range(n)]
visited[0][0][0] = 1

print(bfs(0,0,0))