function solution(s) {
    const result = [];
    const arr = s.split(" ").map(Number);
    result.push(Math.min(...arr));
    result.push(Math.max(...arr));
    return result.join(" ");
}