var str = "Hello";
var num = 1;
var bool = true;

var foo = "string";
console.log(typeof foo);
foo = 1;
console.log(typeof foo);


var integer = 10;
var double = 10.12;
var negative = -20;
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(integer)
console.log(double)
console.log(negative)
console.log(binary)
console.log(octal)
console.log(hex)

console.log(binary === octal);
console.log(octal === hex);

console.log(1 === 1.0);

var result = 4/2;
console.log(result);
result = 3/2;
console.log(result);

var pInf = 10/0;
console.log(pInf);

var nInf = 10/-0;
console.log(nInf);

var nan = 1 * "string";
console.log(nan);

var str = "string";
str = 'string';
str = `string`;

str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다."
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.'

var str = "string";
//문자열은 유사배열이다.
for (var i = 0; i < str.length; i++){
    console.log(str[i])
}

//한 번 생성된 문자열은 일부 문자를 변경하려 해도 Read only로써 변경할 수 없다.
str[0] = "R";
console.log(str);

//재할당은 가능하다.
var str = "string";
console.log(str);

str = "String";
console.log(str);

str += " test";
console.log(str);

str = str.substring(0, 3);
console.log(str);

str = str.toUpperCase();
console.log(str);


var foo = true;
var bar = false;

console.log(typeof foo);
console.log(typeof bar);


var foos;
console.log(typeof foos);

// var element = document.querySelector('.myElem');
// console.log(element);

var score;
score = 80;
score = 90;
score;

var average = (50 + 100) / 2;

var circleArea = 3.1415 * 2 * 2;
var cylinderVolume = circleArea * 5;

var PI = 3.1415;
var radius = 2;
var circleArea = PI * radius * radius;
var cylinderHeight = 5;
var cylinderVolume = circleArea * cylinderHeight;


var name;
name = "Lee";

console.log(name);

var age = 30;

var person = "Lee";
    address = "Seoul";
    price = 200;


console.log(address);
console.log(price);

var price = 10;
var tax = 1;
var total = price + tax;

console.log(total);

var x;
console.log(x);
// console.log(y);


var x;
x = 5;
function foo (){}

if (x > 5) {

}

for (var i = 0; i < 10; i++) {

}


