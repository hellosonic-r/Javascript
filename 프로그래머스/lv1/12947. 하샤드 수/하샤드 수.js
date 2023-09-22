function solution(x) {
    const sum = String(x).split("").map(Number).reduce((tempSum, currValue) => {return tempSum + currValue});
    return x % sum == 0;
}