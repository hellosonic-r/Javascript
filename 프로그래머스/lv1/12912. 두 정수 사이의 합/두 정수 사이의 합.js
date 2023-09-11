function solution(a, b) {
    var answer = 0;
    var arr = [a,b];
    arr.sort((a,b) => (a-b));
    for (let i = arr[0]; i < arr[1]+1; i++){
        answer += i;
    }
    return answer;
}