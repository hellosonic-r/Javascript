function solution(strings, n) {
    var answer = [];
    answer = strings.sort(function(a,b){
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        else {
            return a > b ? 1 : -1;
        }
    })
    return answer;
}