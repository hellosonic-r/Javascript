function solution(n) {
    return Array(n).fill().map((_,index)=>index+1).filter(num => num%2 === 0).reduce((acc,curr) => acc+curr, 0)
}