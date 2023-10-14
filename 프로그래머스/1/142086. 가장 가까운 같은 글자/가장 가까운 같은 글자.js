function solution(s) {
    var answer = [];
    var obj = {};
    for (var i = 0; i < s.length; i++){
        if ((s[i] in obj) == true){
            answer.push(i - Number(obj[s[i]]));
            obj[s[i]] = i;
        } else {
            obj[s[i]] = i;
            answer.push(-1);
        }
    }
    
    return answer;
}