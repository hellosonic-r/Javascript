function solution(n) {
    let cnt = 0;
    let v1 = Array.from( {length:n}, ()=>0);
    let v2 = Array.from( {length:n*2}, ()=>0);
    let v3 = Array.from( {length:n*2}, ()=>0);

    function dfs(y) {
        if (y == n) {
            cnt += 1;
            return;
        }
        for (let x = 0; x < n; x++) {
            if (y>x) {
                if (v1[x] == 0 && v2[y+x] == 0 && v3[y-x] == 0) {
                    v1[x] = 1;
                    v2[y+x] = 1;
                    v3[y-x] = 1;
                    dfs(y+1);
                    v1[x] = 0;
                    v2[y+x] = 0;
                    v3[y-x] = 0;
                }
            } else {
                if (v1[x] == 0 && v2[y+x] == 0 && v3[v3.length-1+y-x] == 0) {
                    v1[x] = 1;
                    v2[y+x] = 1;
                    v3[v3.length-1+y-x] = 1;
                    dfs(y+1);
                    v1[x] = 0;
                    v2[y+x] = 0;
                    v3[v3.length-1+y-x] = 0;
                }
            }
        }
    }
    
    dfs(0,n);
    return cnt;
}