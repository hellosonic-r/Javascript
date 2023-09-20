function solution(n)
{
    var arr = String(n).split("").map(Number);
    var answer = arr.reduce(function(tempSum, currValue){
        return tempSum + currValue;
    }, 0);

    return answer;
}