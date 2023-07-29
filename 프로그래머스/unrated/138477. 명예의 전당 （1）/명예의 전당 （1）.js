function solution(k, score) {
    var result = [];
    var answer = [];
    var i = 0;
    while (1){
        if (i == score.length) break;
        
        if (answer.length < k) {
            answer.push(score[i]);
            i += 1;
            answer.sort(function(a,b){
                return b-a;
            });
        } else {
            var min = Math.min(...answer);
            if (min < score[i]) {
                answer.pop();
                answer.push(score[i]);
                answer.sort(function(a,b){
                    return b-a;
                })
                i += 1;
            }
            else {
                i += 1;
            }
        }
        var realmin = Math.min(...answer);
        result.push(realmin);
        
    }
    return result;
}