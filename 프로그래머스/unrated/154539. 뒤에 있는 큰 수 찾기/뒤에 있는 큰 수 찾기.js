function solution(numbers) {
    var answer = [];
    var arr = Array(numbers.length).fill(-1);

    var stack = [];
    for (let i = 0; i < numbers.length; i++){
        while (stack.length > 0 && numbers[stack[stack.length-1]] < numbers[i]) {
            arr[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    answer = arr;
    return answer;
}