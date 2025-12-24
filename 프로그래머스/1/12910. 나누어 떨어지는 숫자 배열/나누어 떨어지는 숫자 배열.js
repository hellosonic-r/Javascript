function solution(arr, divisor) {
    const result = arr.filter(a => {
        if (a % divisor === 0) {
            return a;
        } 
    })
    
    return result.length === 0 ? [-1] : result.sort((a,b) => a-b);
}