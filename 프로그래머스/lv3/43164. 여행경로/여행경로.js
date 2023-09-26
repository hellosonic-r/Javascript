function solution(tickets) {
    const n = tickets.length;
    const visited = Array(n).fill(0);
    
    function dfs(depth, visited, end, temp) { // depth: dfs수행 깊이 / visited: 방문 / end: 도착지 / temp: 임시 경로 저장
        if (depth == n-1) { // 깊이만큼 수행이 된다면
            result.push(temp.split(" ")); // result에 경로 저장
            return;
        } 
    
        for (let i = 0; i < n; i++){
            if (visited[i] == 0 && tickets[i][0] == end) { // 이전에 선택하지 않았던(방문하지 않았던) 항공권이고, 현재 티켓의 출발지가 이전 dfs의 도착지이면 출발지에서 도착지 가는 항공권이 있다는 의미이므로 
                visited[i] = 1; // 방문처리
                let nextTemp = temp + " " + tickets[i][1]; // 다음 임시 경로 저장
                dfs(depth+1, visited, tickets[i][1], nextTemp); // 다음 dfs 수행
                visited[i] = 0; // dfs 돌아와서는 방문처리 해제
            }
        }
    }
    
    const result = [];
    
    for (let j = 0; j < n; j++){
        const v = Array(n).fill(0);
        v[j] = 1;
        if (tickets[j][0] == "ICN"){
            dfs(0, v, tickets[j][1], tickets[j][0] + " " + tickets[j][1]);
        }
        else {
            continue;
        }
    }
    
    result.sort();
    console.log(result);
    return result[0];
}