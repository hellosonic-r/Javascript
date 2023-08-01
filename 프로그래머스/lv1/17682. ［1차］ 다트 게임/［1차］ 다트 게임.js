function solution(dartResult) {
    var answer = 0;
    var score = 0;
    var obj = {
        "S" : 1,
        "D" : 2,
        "T" : 3,
    }
    var board = [];
    var tenLocation = [];
    
    for (var i = 0; i < dartResult.length-1; i++){
        if ((48 <= dartResult[i].codePointAt() && dartResult[i].codePointAt() <= 57) && (48 <= dartResult[i+1].codePointAt() && dartResult[i+1].codePointAt() <= 57)){
            tenLocation.push(i+1);
        }
    }
    
    for (var i = 0; i < dartResult.length; i++){
        var str = dartResult[i];
        var ascii = str.codePointAt(); // 48~57
        
        if (48 <= ascii && ascii <= 57){
            if (tenLocation.includes(i+1) == true){
                continue;
            } 
            if (tenLocation.includes(i) == true){
                board.push(score);
                score = 10;
            }
            if (tenLocation.includes(i+1) == false && tenLocation.includes(i) == false){
                board.push(score);
                score = Number(dartResult[i]);
            }
            
        } else if (ascii == 83 || ascii == 68 || ascii == 84) {
            score = Math.pow(score,obj[dartResult[i]]);
        } else {
            if (dartResult[i] == "*"){
                score = score * 2;
                board[(board.length)-1] = board[(board.length)-1] * 2;
            } else if (dartResult[i] == "#"){
                score = (-1) * score;
            }
        }
        if (i == dartResult.length - 1){
            board.push(score);
        }
        // console.log("T".codePointAt()); // S : 83, D : 68, T : 84
    }
    console.log(score);
    console.log(board);
    console.log(dartResult.includes(10))
    answer = board.reduce(function add(sum, currValue){
        return sum + currValue;
    });
    return answer;
}