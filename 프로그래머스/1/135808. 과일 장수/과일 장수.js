// 1점부터 k점까지 
// 한 상자에 사과를 m개씩 포장
// 사과 중 가장 낮은 점수가 p, 사과 한 상자의 가격은 p*m

function solution(k, m, score) {
    var answer = 0;
    score.sort(function(a,b){
        return b-a;
    });
    var result = [];
    var time = parseInt(score.length / m);
    
    for (var i = 0; i < time; i++){ // 0,1,2,3
        var temp = score.slice(m*i,m*i +m);
        var min = Math.min(...temp);
        answer += (min * m);
    }
    return answer;
}