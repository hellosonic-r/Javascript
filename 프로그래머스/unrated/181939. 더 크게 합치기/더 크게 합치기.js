function solution(a, b) {
    var answer = 0;
    var ab = Number((String(a) + String(b)));
    var ba = Number((String(b) + String(a)));
    if (ab >= ba) answer = ab;
    else answer = ba;

    return answer;
}