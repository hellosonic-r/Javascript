function solution(n)
{
    var arr = String(n).split("").map(Number);
    var answer = arr.reduce(function(sum, currValue){
       return sum + currValue; 
    });
    return answer;
}