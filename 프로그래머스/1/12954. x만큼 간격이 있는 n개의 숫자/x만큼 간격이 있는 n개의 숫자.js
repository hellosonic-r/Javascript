function solution(x, n) {
    return Array.from( { length : n}, () => x).map((element, idx) => {return element * (idx+1)})
    // return Array(n).fill(x).map((element, idx) => {return element * (idx + 1)});
    
}