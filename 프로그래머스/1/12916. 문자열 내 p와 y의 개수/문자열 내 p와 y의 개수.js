function solution(s){
    const string = s.toLowerCase();
    
    let pCnt = 0; let yCnt = 0;
    
    [...string].forEach(s => {
        if (s === 'p') pCnt += 1;
        else if (s === 'y') yCnt += 1;
    })
    
    return yCnt === pCnt ? true : false;
}