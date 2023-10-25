function solution(n) {
    // return Number(String(n).split("").map(Number).sort((a,b) => (b-a)).join(""));
    // return Number(String(n).split("").map(Number).sort((a,b)=>(b-a)).join(""));
    return Number([...String(n)].map(Number).sort((a,b) => b-a).join(""));
    
    
}
