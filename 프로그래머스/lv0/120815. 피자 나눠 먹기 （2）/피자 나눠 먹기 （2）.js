function solution(n) {
    var answer = 0;
    while (1){
        answer += 1;
        if ((answer * 6) % n == 0){
            break;
        }
    }
    return answer;
}