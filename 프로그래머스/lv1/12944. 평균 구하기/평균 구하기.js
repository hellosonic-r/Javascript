function solution(arr) {
    var sum = arr.reduce(function(tmp, currValue){
        return tmp + currValue;
    }, 0);
    var answer = sum / arr.length;
    return answer;
}