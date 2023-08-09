function solution(absolutes, signs) {
    var answer = 0;
    var len = absolutes.length;

    for (let i = 0; i < len; i++){
        if (signs[i] == true) {
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    return answer;
}