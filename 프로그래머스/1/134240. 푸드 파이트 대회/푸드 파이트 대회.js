function solution(food) {
    var answer = '';
    
    for (var i = 1; i < food.length; i++){
        answer += String(i).repeat(parseInt(food[i]/2))
    }
    answer += "0";
    for (var i = food.length-1; i > 0; i--){
        answer += String(i).repeat(parseInt(food[i]/2))
    }
    return answer;
}