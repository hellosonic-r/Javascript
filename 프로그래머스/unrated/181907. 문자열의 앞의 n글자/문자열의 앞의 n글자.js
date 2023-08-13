function solution(my_string, n) {
    var answer = '';
    answer = my_string.split("").slice(0,n).join("");
    return answer;
}