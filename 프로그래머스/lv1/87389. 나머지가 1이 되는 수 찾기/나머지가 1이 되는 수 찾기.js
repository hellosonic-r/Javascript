function solution(n) {
    const arr = Array.from({ length : n }, (_,idx) => idx+1);
    const newArr = arr.filter((element, idx) => {
        if (n%element == 1) return element;
    });
    return newArr[0];
}