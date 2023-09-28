function solution(A,B){
    
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    const n = A.length;
    let answer = 0;
    
    for (let i = 0; i < n; i++){
        answer += (A[i] * B[i]);
    }
    
    return answer;    
}