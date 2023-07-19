function sum(numbers){
    var result = 0;
    for (var i = 0; i < numbers.length; i++){
        result += numbers[i]
    }
    return result
}
function solution(numbers) {
    var answer = 0;
    answer = sum(numbers) / numbers.length 
    return answer;
    
}