function solution(x, n) {
    var answer = [];
    var temp = x;
    while (answer.length < n){
        answer.push(temp);
        temp += x;
    }
    return answer;
}