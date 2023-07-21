function solution(numbers, direction) {
    var answer = [];
    var out = 0;
    var ins = 0;
    if (direction == "right"){
        out = numbers.pop();
        numbers.unshift(out);
    } else if (direction == "left"){
        out = numbers.shift();
        numbers.push(out);
    }
    answer = numbers;
    return answer;
}