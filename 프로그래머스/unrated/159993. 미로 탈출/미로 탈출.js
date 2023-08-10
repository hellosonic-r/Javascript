var dx = [0,1,0,-1];
var dy = [-1,0,1,0];

function goLever(sx,sy,lx,ly,n,m,maps,visited){
    var queue = [];

    queue.push([sx,sy]);
    visited[sy][sx] = 1;
    while (queue.length){
        var [x,y] = queue.shift();
        if (x == lx && y == ly) break;
        for (let i = 0; i < 4; i++){
            var nx = x + dx[i], ny = y + dy[i];
            if (nx < 0 || ny < 0 || nx >= m || ny >= n){
                continue;
            } else {
                if ((maps[ny][nx] == 'O' || maps[ny][nx] == 'E') && visited[ny][nx] == 0){
                    visited[ny][nx] = visited[y][x] + 1;
                    queue.push([nx,ny]);

                }
                else if (maps[ny][nx] == 'L' && visited[ny][nx] == 0){
                    visited[ny][nx] = visited[y][x] + 1;
                    queue.push([nx,ny]);

                }
            }
        }
    }
    return visited[ly][lx]-1;
    
}

function goDestination(sx,sy,ex,ey,n,m,maps,check,levered){
    var q = [];
    q.push([sx, sy]);
    check[sy][sx] = 1;
    while (q.length) {
        var [x,y] = q.shift();
        if (x == ex && y == ey) break;
        for (let i = 0; i < 4; i++){
            var nx = x + dx[i], ny = y + dy[i];
            if (nx < 0 || ny < 0 || nx >= m || ny >= n){
                continue;
            } else {
                if ((maps[ny][nx] == 'O' || maps[ny][nx] == 'S') && check[ny][nx] == 0){
                    check[ny][nx] = check[y][x] + 1;
                    q.push([nx,ny]);
                }
                else if (maps[ny][nx] == 'E' && check[ny][nx] == 0){
                    check[ny][nx] = check[y][x] + 1;
                    q.push([nx,ny]);
                }
            }
        }
    }
    return check[ey][ex] - 1;
    
    
}

function solution(maps) {
    var answer = 0;
    //가로 : m / 세로 : n
    var n = maps.length, m = maps[0].length;
    var visited = Array.from( {length : n } , () => Array(m).fill(0));
    console.log(visited);
    
    var sx = 0, sy = 0, lx = 0, ly = 0, ex = 0, ey = 0;

    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (maps[i][j] == 'S') {
                sx = j;
                sy = i;
            }
            if (maps[i][j] == 'L') {
                lx = j;
                ly = i;
            }
            if (maps[i][j] == 'E') {
                ex = j;
                ey = i;
            }
        }
    }
    var visited = Array.from( {length : n}, () => Array(m).fill(0));
    
    var levered = goLever(sx,sy,lx,ly,n,m,maps,visited);
    
    if (levered == -1) answer = -1;
    else {
        var check = Array.from( {length : n}, () => Array(m).fill(0));
        var des = goDestination(lx,ly,ex,ey,n,m,maps,check,levered);
        if (des == -1) {
            answer = -1;
        } else {
            answer = levered + des;
        }
    }
    
    

    return answer;
}