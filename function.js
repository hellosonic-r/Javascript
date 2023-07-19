function square(number){
    return number * number;
}

square(2); //함수의 재사용


var foo = function multiply(a,b){
    return a*b;
}

var bar = function(a,b){ // 익명함수
    return a*b;
}

console.log(foo(10,5))

console.log(bar(10,5));


var res = squ(5);

function squ(number){
    return number * number;
}

// 코드 내 어느 곳에서든지 호출이 가능 >> 함수 호이스팅

var increase = function(num){
    return ++num;
};

var decrease = function(num){
    return --num;
};

var predicates = { increase, decrease };

function makeCounter(predicate){
    var num = 0;
    return function() {
        num = predicate(num);
        return num;

    }   
}


console.log(Math.ceil(1.4)); // 올림
console.log(Math.floor(-1.9)); // 내림

const arr = [1,2,3];
console.log(Math.min.apply(null, arr));

