function solution(num_str) {
    var answer = num_str.split("").map(Number).reduce(function (s, currValue){
        return s + currValue;
    });
    return answer;
}