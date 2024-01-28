function solution(n) {
    return n.toString().split('').map(str=> parseInt(str)).reduce((sum,curr) => sum + curr);
}