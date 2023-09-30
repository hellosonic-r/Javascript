function solution(a, b, s = 0) {
    const start = Math.min(a,b);
    const end = Math.max(a,b);
    for(let i = start; i < end+1; i++) {
        s += i;
    }
    return s;
}
