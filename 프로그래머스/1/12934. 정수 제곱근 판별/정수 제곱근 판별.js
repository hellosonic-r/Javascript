function solution(n) {
    const a = Math.sqrt(n);
    let answer = 0;
    
    parseInt(a) == a ? answer = Math.pow(a+1,2) : answer = -1;
    return answer;
    
    
}