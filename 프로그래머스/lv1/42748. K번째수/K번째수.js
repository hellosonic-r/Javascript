function solution(array, commands) {
    var answer = [];
    for (var c of commands){
        var tempArr = array.slice(c[0]-1,c[1]).sort(function(a,b){
            return a-b;
        })
        answer.push(tempArr[c[2]-1]);
    }
    return answer;
}