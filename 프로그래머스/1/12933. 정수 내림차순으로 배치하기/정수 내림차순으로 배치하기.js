function solution(n) {
    return parseInt(n.toString().split("").map(Number).sort((a,b) => {
        if (a > b) return -1;
        else if (a < b) return 1;
        return 0;
    }).join(""));
    
    
}
