function solution(s) {
    var answer = '';
    var cnt = 0;
    for (var i = 0; i < s.length; i++){
        if (s[i] == " "){
            answer += s[i];
            cnt = 0;
        } else {
            if (cnt % 2 == 0){
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            cnt += 1;
        }
    }
    return answer;
}