function solution(a, b) {
    var answer = 0;
    var len = a.length;
    for (var i = 0; i < len; i++){
        answer += (a[i]*b[i]);
    }
    
    return answer;
}