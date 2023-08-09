function getGcd(a,b){
    if (b == 0) return a;
    return getGcd(b, a%b);
}
function solution(n, m) {
    var answer = [];
    var gcd = getGcd(n,m);
    answer.push(gcd);
    var lcm = n*m / gcd;
    answer.push(lcm);
    return answer;
}