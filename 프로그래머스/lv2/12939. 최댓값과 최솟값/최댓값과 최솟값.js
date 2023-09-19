function solution(s) {
    var answer = '';
    var array = s.split(" ").map(Number);
    answer += Math.min(...array);
    answer += " ";
    answer += Math.max(...array);
    return answer;
    
}