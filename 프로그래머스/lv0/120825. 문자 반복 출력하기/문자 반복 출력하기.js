function solution(my_string, n) {
    var answer = '';
    for (var i = 0; i < my_string.length; i++){
        var temp = '';
        for (var j = 0; j < n; j++){
            temp += my_string[i]
        }
        answer += temp;
    }
    return answer;
}