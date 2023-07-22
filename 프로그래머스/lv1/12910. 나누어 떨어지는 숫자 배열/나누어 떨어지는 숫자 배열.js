function solution(arr, divisor) {
    var answer = [];
    for (var i of arr){
        if (i % divisor == 0){
            answer.push(i);
        }
    }
    if (answer.length == 0){
        answer.push(-1);
    } else {
        answer.sort(function(a,b){
            return a-b;
        })
        
    }
    
    return answer;
}