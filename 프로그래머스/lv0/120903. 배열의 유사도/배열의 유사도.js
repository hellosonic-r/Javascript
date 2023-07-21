function solution(s1, s2) {
    var answer = 0;
    for (var i = 0; i < s1.length ; i++){
        if (s2.includes(s1[i]) == true) {
            answer += 1;
        }
    }
    return answer;
}