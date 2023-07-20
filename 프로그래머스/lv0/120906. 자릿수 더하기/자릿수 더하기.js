function solution(n) {
    var answer = 0;
    var a = String(n).split("");
    console.log(a);
    for (var i = 0; i < a.length; i++){
        answer += Number(a[i]);
    }
    return answer;
}