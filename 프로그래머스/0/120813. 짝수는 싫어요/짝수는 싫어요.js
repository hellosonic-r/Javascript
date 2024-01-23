function solution(n) {
    return Array(n).fill().map((_,index) => index+1).filter(num => num%2 === 1).sort((a,b) => a-b)
}