function solution(A,B){
    var answer = 0;

    A.sort(function(a,b){
        return a-b;
    });
    
    B.sort(function(a,b){
        return b-a;
    });
    
    var len = A.length;
    
    for (var i = 0; i < len; i++){
        answer += (A[i] * B[i])
    }

    return answer;
}