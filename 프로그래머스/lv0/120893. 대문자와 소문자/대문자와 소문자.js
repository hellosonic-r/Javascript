function solution(my_string) {
    var answer = '';
    for (var i = 0; i < my_string.length; i++){
        var temp = my_string[i].codePointAt();
        if (65 <= temp && temp <= 90){
            temp += 32;
            answer += String.fromCodePoint(temp);
        } else if (97 <= temp && temp <= 122){
            temp -= 32;
            answer += String.fromCodePoint(temp);
        }
    }
    return answer;
}