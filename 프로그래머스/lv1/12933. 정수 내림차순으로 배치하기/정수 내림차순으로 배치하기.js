function solution(n) {
    var answer = 0;
    var arr = String(n).split("").map(Number);
    arr.sort(function(a,b){
        return b-a;
    })
    arr = arr.join("");
    answer = Number(arr);
    return answer;
}