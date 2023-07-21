function solution(my_string, letter) {
    var answer = '';
    var arr = my_string.split("");
    for (var i = 0; i < arr.length; i++){
        if (my_string[i] == letter){
            continue
        } else{
            answer += my_string[i];
        }
    }
    return answer;
}