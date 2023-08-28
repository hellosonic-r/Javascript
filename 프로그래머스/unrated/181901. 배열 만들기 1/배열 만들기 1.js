function solution(n, k) {
    var answer = [];
    for (let num = 1; num <= n; num++){
        if (num%k == 0) answer.push(num);
    }
    return answer;
}