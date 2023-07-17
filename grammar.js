var x;
x = 6;
console.log(x);

var str = "Hello World"
console.log(str);


//자바스크립트 7가지 데이터 타입
//number, string, boolean, null, undefined, symbol, object

var num1 = 1001;
var num2 = 10.50;

var string1 = "Hello";
var stirng2 = 'World';

var bool = true;

var foo = null;

var bar;

var obj = {name:'Lee', gender:'male'};

var arr = [1,2,3];

var foo = function(){};

var area = 5*4;

console.log(obj)
console.log(obj,area)

var str = "My name is " + "Lee";

var color = "red";

var foo = 3>5;
var bar = (5>3) && (2<4);


var x = 5 + 6;

function foo(arg) {
    return ++arg;
}

var i = 0;
while (1){
    if (i>5){
        break;
    }
    console.log(i);
    i++;
}

var x = 5;
var y = 6;
var z = x + y;

console.log(z);

function myFunction(x,y){
    return x+y;

}

if(x>0){

}

for (var i = 0; i < 10; i++){

}

var time = 10;
var greeting;

if (time<10){
    greeting = "Good morning";
} else if (time<20){
    greeting = "Good day";
} else{
    greeting = "Good evening";
}

console.log(greeting)

function square(number){
    return number * number;
}

console.log(square(2));

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function(){
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person);
console.log(person);
person.sayHello();

var arr = [1,2,3,4,5];
console.log(arr[1]);