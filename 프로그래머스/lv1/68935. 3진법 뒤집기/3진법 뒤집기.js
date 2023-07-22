function solution(n) {
    var answer = 0;
    var stack = [];
    while ( n != 0){
        stack.push(n % 3);
        n = parseInt(n / 3);
    }
    console.log(stack);
    stack.reverse();
    for (var i = 0; i < stack.length; i++){
        answer += stack[i] * (3 ** i);
    }
    return answer;
}