function solution(n) {
    var answer = 0;
    answer = Number(String(n).split("").map(Number).sort((a,b) => (b-a)).join(""));
    return answer;
}