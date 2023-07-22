function solution(t, p) {
    var answer = 0;
    var len = p.length;
    for (var i = 0; i < t.length - (len - 1);i++){
        var temp = t.slice(i, i+len);
        if (Number(temp) <= Number(p)){
            answer += 1;
        }
    }
    return answer;
}