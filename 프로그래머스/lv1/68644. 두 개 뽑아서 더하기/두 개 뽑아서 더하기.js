function solution(numbers) {
    var answer = [];
    for (var i = 0; i < numbers.length; i++){
        for (var j = i+1 ; j< numbers.length; j++){
            if (answer.includes(numbers[i] + numbers[j]) == false){
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }
    answer.sort(function(a,b){
        return a-b;
    })
    return answer;
}