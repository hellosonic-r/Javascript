function solution(numbers) {
    var answer = 0;
    numbers.sort(function(a,b){
        return a - b;
    })
    var len = numbers.length;
    answer = numbers[len-1] * numbers[len-2];
    return answer;
}