function solution(N, stages) {
    var answer = [];
    var obj = {};
    var mo = stages.length;
    
    for (var i = 1; i < N+1; i++){
        var cnt = 0;
        for (var j of stages){
            if (j == i) {
                cnt += 1;
            }
        }
        obj[i] = cnt/mo;
        mo -= cnt;
    }
    
    var result = []
    
    for (var s in obj){
        result.push([Number(s), Number(obj[s])]);
    }
    result.sort(function(a,b){
        return b[1] - a[1];
    });
    console.log(result);
    
    
    for (var k of result){
        answer.push(k[0]);
    }
    
    return answer;
}