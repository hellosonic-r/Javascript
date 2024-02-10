function solution(n) {
   return [...String(n)].map(Number).reduce((s, currValue) => {return s + currValue}, 0);
}