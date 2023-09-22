function solution(n) {
    const sqrtNum = Math.sqrt(n);
    if (sqrtNum == parseInt(sqrtNum)) {
        return Math.pow(sqrtNum+1,2);
    }
    return -1
}