function solution(arr)
{
    var answer = [];

    for (var i of arr){
        if (answer[answer.length-1] == i) {
            continue
        } else {
            answer.push(i);
        }
    }
    
    return answer;
}