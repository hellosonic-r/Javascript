function solution(my_string, n) {
    var answer = '';
    var len = my_string.length;
    var arr = my_string.split('');
    answer = arr.slice(len-n, len).join('');
    return answer;
}