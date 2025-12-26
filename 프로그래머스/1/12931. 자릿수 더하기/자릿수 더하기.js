function solution(n){
    let answer = 0;
    [...(n + "").split("")].forEach(num => {
        answer += Number(num);
    })
    
    return answer;
}