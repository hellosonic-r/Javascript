function solution(n) {
    return Math.sqrt(n) % Math.floor(Math.sqrt(n)) === 0 ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : -1
}