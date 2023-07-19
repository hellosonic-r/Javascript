// 원시타입은 변경 불가능한 값이다. 재할당은 가능
// boolean, null, undefined, number, string, symbol
// 원시타입 이외의 모든 값은 객체 타입, 객체 타입은 변경 가능한 값이다.


var str = "hello";
str = "world";
//hello와 world 모두 메모리에 존재


var statement = "I am an immutable value";

var otherStr = statement.slice(1,4);

console.log(statement);
console.log(otherStr);


var arr = []
console.log(arr.length);

var v2 = arr.push(2);
console.log(arr.lenth);


var user = {
    name: "Lee",
    adress: {
        city: 'Seoul'
    }
};

var myName = user.name;
user.name = "Kim";

console.log(myName);

myName = user.name;
console.log(myName);


var user1 = {
    name: "Lee",
    address: {
        city: "Seoul"
    }
};

var user2 = user1;

user2.name = "Kim";
console.log(user1.name);
console.log(user2.name);



const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy);
console.log(obj == copy);

const o1 = { a: 1};
const o2 = { b: 2};
const o3 = { c: 3};

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1);
console.log(o1); // 타겟 객체가 변경

const o4 = { a: 1};
const o5 = { b: 2};
const o6 = { c: 3};

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2);
console.log(o4);


const user1 = {
    name: 'Lee',
    address: {
        city: "Seoul"
    }
};

const user2 = Object.assign({}, user1);



