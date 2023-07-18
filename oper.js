var x = 5, result;

result = x++;
console.log(result, x); // 5 6

result = ++x;
console.log(result, x); // 7 7

result = x--;
console.log(result, x); //7 6

result = --x;
console.log(result, x); // 5 5


var y = 2;
//조건식 ? 조건식이 true일 때 반환할 값: 조건식이 false일 때 반환할 값
var result = y % 2 ? "홀수" : "짝수";
console.log(result);

var z = 2, ans;

if (z % 2) ans = "홀수";
else    ans = "짝수";

console.log(ans);


console.log(!true);

// !연산자는 언제나 불리언 값을 반환
console.log(!0);

var x, y, z ;
x = 1, y = 2, z = 3;

console.log(typeof null);