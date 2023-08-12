function getGcd(a,b) {
    if (b == 0) return a;
    return getGcd(b, a%b);
}
function solution(n, m) {
    var answer = [];
    var arr = [n,m];
    arr.sort((a,b) => a-b);
    var gcd = getGcd(arr[0], arr[1]);
    var lcm = n*m / gcd;
    answer.push(gcd);
    answer.push(lcm);
    
    return answer;
}