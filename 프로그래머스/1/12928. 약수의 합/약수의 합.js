function solution(n) {
    const arr = Array.from( { length : n }, (_, idx) => idx+1);
    // let result = 0;
    // arr.forEach((element, idx) => {n%element==0 ? result += element : result += 0});
    return arr.reduce((s, currValue) => { return n%currValue == 0 ? s + currValue : s + 0},0);
}