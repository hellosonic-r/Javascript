function solution(x, n) {
    var answer = Array(n).fill(x).map((element, idx) => {
        return element*(idx + 1);
    });
    return answer;
}