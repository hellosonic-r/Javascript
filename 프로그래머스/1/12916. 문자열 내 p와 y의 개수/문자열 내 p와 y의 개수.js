function solution(s){
    let pCnt = 0, yCnt = 0;
    const string = s.toLowerCase();
    
    
    [...string].forEach((element, value) => {
        if (element == "p") pCnt += 1;
        else if (element == "y") yCnt += 1;
    });
    
    return pCnt == yCnt;
}