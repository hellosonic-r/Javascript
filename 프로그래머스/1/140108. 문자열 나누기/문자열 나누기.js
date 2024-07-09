function solution(s) {
    const stack = [];
    const arr = s.split('');
    let firstLetter;
    let cntA = 0;
    let cntB = 0;
    let answer = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (cntA === 0) {
            firstLetter = arr[i];
            cntA += 1;
            continue;
        }
        if (arr[i] !== firstLetter) {
            cntB += 1;
        }
        else {
            cntA += 1;
        }
        if (cntA === cntB) {
            firstLetter = "";
            cntA = 0;
            cntB = 0;
            answer += 1;
        }
    }
    if (cntA !== 0) answer += 1;
    return answer; 
}