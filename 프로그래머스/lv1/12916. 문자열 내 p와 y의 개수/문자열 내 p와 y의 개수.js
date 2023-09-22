function count(array, value){
    let cnt = 0;
    for (let element of array){
        if (element == value) cnt += 1;
    }
    return cnt; 
}
function solution(s){
    var answer = true;
    
    const pCnt = count(s.toLowerCase(),'p');
    const yCnt = count(s.toLowerCase(),'y');
    
    return pCnt == yCnt;
}