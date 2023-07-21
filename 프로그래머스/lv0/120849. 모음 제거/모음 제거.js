function solution(my_string) {
    var answer = '';
    var mo = ['a','e','i','o','u'];
    var stack = [];
    for (var i = 0; i < my_string.length; i++){
        if (mo.includes(my_string[i]) == true){
            stack.push("");
        } else {
            stack.push(my_string[i]);
        }
    }
    answer = stack.join("");
    return answer;
}