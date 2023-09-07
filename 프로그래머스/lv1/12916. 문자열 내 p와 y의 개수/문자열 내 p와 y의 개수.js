function count(array, n){
    var cnt = 0;
    for (let a of array){
        if (a == n) cnt += 1;
    }
    return cnt;
}

function solution(s){
    var answer = true;

    var news = s.toUpperCase();
    
    var pCnt = count(news, 'P');
    var yCnt = count(news, 'Y');
    
    if (pCnt == yCnt) answer = true;
    else answer = false;
    
    return answer;
    
}