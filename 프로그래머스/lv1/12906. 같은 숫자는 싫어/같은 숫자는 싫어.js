function solution(arr)
{
    var answer = [];
    
    for (let num of arr){
        if (answer.length == 0){
            answer.push(num);
        } else {
            if (num != answer[answer.length-1]) answer.push(num);
        }
    }
    
    return answer;
}