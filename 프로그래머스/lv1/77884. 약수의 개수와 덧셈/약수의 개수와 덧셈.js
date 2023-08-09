function solution(left, right) {
    var answer = 0;
    for (let num = left; num < right+1; num++){
        var cnt = 0;
        for (let i = 1; i < num+1; i++){
            if (num % i == 0) cnt += 1;
        }
        if (cnt % 2 == 0) answer += num;
        else answer -= num;
    }
    return answer;
}