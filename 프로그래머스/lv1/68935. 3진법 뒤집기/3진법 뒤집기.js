function solution(n) {
    var answer = 0;
    var arr = n.toString(3).split("").map(Number);
    
    for (let i = 0; i < arr.length; i++){
        answer += arr[i] * Math.pow(3, i);
    }
    
    return answer;
}