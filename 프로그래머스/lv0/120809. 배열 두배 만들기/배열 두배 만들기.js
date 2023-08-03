function solution(numbers) {
    var answer = [];
    answer = numbers.map((element, index) => {
        return element * 2;    
    });
    return answer;
}