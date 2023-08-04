function getGcd(a,b) {
    if (b === 0) return a;
    return getGcd(b, a % b);
}

function solution(arr) {
    var answer = 0;
    
    answer = arr.reduce((a,b) => (a*b) / getGcd(a, b));

    return answer;
}