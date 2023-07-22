function solution(n) {
    var answer = 0;
    for (var i = 1; i < n+1; i++){
        if (n%i == 1){
            answer = i;
            break;
        }
    }
    return answer;
}