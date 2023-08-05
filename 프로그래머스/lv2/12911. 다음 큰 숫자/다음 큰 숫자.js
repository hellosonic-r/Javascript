function solution(n) {
    var answer = 0;
    var oneNum = n.toString(2).split("1").length;
    while (true) {
        n++;
        if (n.toString(2).split("1").length == oneNum) return n;
    }
    return answer;
}