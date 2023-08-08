function solution(x) {
    var answer = true;
    var sum = String(x).split("").map(Number).reduce(function(s, currValue){
        return s + currValue;
    });
    
    if (x % sum == 0) answer = true;
    else answer = false;
    
    return answer;
}