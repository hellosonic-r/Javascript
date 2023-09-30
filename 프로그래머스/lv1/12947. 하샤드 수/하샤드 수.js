function solution(x) {
    return x % ([...String(x)].map(Number).reduce((s,currValue) => {return s + currValue;}, 0)) == 0;
}