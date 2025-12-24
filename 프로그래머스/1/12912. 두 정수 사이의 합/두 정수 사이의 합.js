function solution(a, b) {
    const start = Math.min(a,b);
    const end = Math.max(a,b);
    
    let answer = 0;
    
    for (let i = start; i < end + 1; i++) {
        answer += i;
    }
    
    return answer;
}