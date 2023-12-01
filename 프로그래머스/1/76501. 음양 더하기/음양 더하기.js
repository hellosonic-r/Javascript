function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((element, idx) => { signs[idx] ? answer += element : answer -= element });

    return answer;
}