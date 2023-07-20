function solution(dot) {
    var answer = 0;
    var x = dot[0];
    var y = dot[1];
    if (x>0 && y>0){
        answer = 1;
    } else if (x<0 && y>0){
        answer = 2;
    } else if (x<0 && y<0){
        answer = 3;
    } else {
        answer = 4;
    }
    return answer;
}