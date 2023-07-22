function solution(s) {
    var answer = 0;
    var arr = s.split("");
    if (arr[0] == '-1'){
        answer = arr.slice(1,arr.length).join("");
        answer = Number(answer);
    } else {
        answer = arr.join("");
        answer = Number(answer);
    }
    return answer;
}