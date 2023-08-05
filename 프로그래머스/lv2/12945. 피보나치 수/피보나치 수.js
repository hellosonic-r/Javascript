function solution(n) {
    var answer = 0;
    var arr = Array(n+1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    
    for (var i = 2; i < n+1; i++){
        arr[i] = (arr[i-2] + arr[i-1]) % 1234567
    }
    
    answer = arr[n] % 1234567;
    
    return answer;
}