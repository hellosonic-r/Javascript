function solution(d, budget) {
    var answer = 0;
    d.sort(function(a,b){
        return a-b;
    })
    for (var i of d){
        if (i<=budget){
            budget -= i;
            answer += 1;
        } else {
            break;
        }
    }
    return answer;
}