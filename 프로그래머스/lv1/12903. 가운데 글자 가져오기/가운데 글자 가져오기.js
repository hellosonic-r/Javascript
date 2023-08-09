function solution(s) {
    var answer = '';
    if (s.length % 2 == 1){
        answer = s[parseInt(s.length / 2)];
    }
    else {
        answer = s.split("").slice(parseInt(s.length/2)-1, parseInt(s.length/2)+1).join("");
    }
    return answer;
}