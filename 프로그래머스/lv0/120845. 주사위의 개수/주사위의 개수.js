function solution(box, n) {
    
    var answer = 0;
    var temp = 1;
    var cnt = 0;
    for (var i of box){
        if (i>=n){
            cnt += 1
        }
        temp *= parseInt(i/n)  
    }
    if (cnt == 3){
        return temp;    
    } else {
        return answer;
    }

}