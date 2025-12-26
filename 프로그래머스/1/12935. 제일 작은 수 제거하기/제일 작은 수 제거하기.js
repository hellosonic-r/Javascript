function solution(arr) {
    const minIdx = arr.indexOf(Math.min(...arr));
    arr.splice(minIdx,1);
    
    return arr.length !== 0 ? arr : [-1];
}