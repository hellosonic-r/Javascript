function solution(number, limit, power) {
    var answer = 0;
    for (var i = 1; i < number+1; i++){
        var attack = 0;
        var sqrt = Math.sqrt(i);
        if ((parseInt(sqrt) * parseInt(sqrt)) == (sqrt * sqrt)){
            for (var j = 1; j < parseInt(sqrt)+1; j++){
                if (i % j == 0){
                    attack += 1;
                } 
            }
            attack = attack * 2 - 1;
        } else {
            for (var j = 1; j < parseInt(sqrt)+1; j++){
                if (i % j == 0){
                    attack += 1;
                }
            }
            attack = attack * 2;
        }
        if (attack > limit){
            answer += power;
        } else {
            answer += attack;
        }
    }
    return answer;
}