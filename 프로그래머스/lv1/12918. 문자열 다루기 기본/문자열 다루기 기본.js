function solution(s) {
    var answer = true;
    var len = s.length;
    var cnt = 0;
    for (var i of s){
        var ascii = i.codePointAt();
        if (ascii >= 48 && ascii <= 57){
            cnt += 1;
        }
    }
    if ((len == 4 || len == 6) && cnt == len){
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}