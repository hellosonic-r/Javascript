function solution(arr) {
    var answer = 0;
    const sum = arr.reduce(function(s, currValue){
        return s + currValue;
    });
    answer = sum / arr.length;
    return answer;
}