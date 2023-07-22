function solution(s) {
    var answer = '';
    var arr = s.split("");
    arr.sort();
    arr.reverse();
    answer = arr.join("");
    return answer;
}