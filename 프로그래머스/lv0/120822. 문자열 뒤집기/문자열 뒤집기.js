function solution(my_string) {
    var answer = '';
    var i = my_string.length;
    for (j = i-1; j > -1; j--){
        answer += my_string[j];
    }
    return answer;
}