var emptyObject = {};
console.log(typeof emptyObject);


//객체 리터럴 방식
var person = {
    name: "Lee",
    gender: "male",
    sayHello: function(){
        console.log("Hi! My name is " + this.name);
    }
};

console.log(typeof person);
console.log(person);

person.sayHello();


//object 생성자 함수
var people = new Object(); //빈 객체의 생성

people.name = "Lee";
people.gender = "male";
people.sayHello = function(){
    console.log("Hi! My name is " + this.name);

};

console.log(typeof people);
console.log(people);

people.sayHello();


//생성자 함수
var person1 = {
    name: "Lee",
    gender: "male",
    sayHello: function(){
        console.log("Hi! My name is " + this.name);
    
    }
};

var person2 = {
    name: "Kim",
    gender: "female",
    sayHello: function(){
        console.log("Hi! My name is " + this.name);
    }

};

//생성자 함수를 사용하면 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
function Person(name, gender){
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log("Hi! My name is " + this.name);

    };
}

var person1 = new Person("Lee", "male");
var person2 = new Person("Kim", "female");

console.log("person1: ", typeof person1);
console.log("person2: ", typeof person2);
console.log("person1: ", person1);
console.log("person2: ", person2);

person1.sayHello();
person2.sayHello();





function Person(name, gender){
    var married = true; // private
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log("Hi! My name is " + this.name);
    };
}

var person = new Person("Lee", "male");

console.log(typeof person);
console.log(person);

console.log(person.gender);
console.log(person.married);



var person = {
    "first-name": "Ung-mo",
    "last-name": "Lee",
    gender: "male",
    1: 10,
    function: 1
};

console.log(person);



var person = {
    'first-name': 'Ung_mo',
    "last-name": "Lee",
    gender: "male",
    1: 10
};


console.log(person);


console.log(person['fisrt-name']);
console.log(person.gender);
console.log(person["gender"]);

console.log(person["1"]);
console.log(person[1]);


//프로퍼티 값 갱신

var person = {
    "first-name": "Ung-mo",
    "last-name": "Lee",
    gender: "male",
};


person["first-name"] = "Kim";
console.log(person["first-name"]);


//프로퍼티 동적 생성. 객체가 소유하지 않은 프로퍼티 키에 값을 할당하면
//주어진 키와 값으로 프로퍼티 생성하여 객체에 추가

var person = {
    "first-name": "ung-mo",
    "last-name": "lee",
    gender: "male",
}

person.age = 19;
console.log(person);


delete person.gender;
console.log(person.gender)


var person = {
    "first" : "ung-mo",
    "last" : "lee",
    gender: "male",
};

console.log(person);

for (var prop in person){
    console.log(prop + ": "+ person[prop]);
}

var array = ["one", "two"];

for (var index in array){
    console.log(index + ":"+array[index]);
}


const arr = [1,2,3];
arr.name = "my array";

for (const value of arr){
    console.log(value);
}

for (const [index, value] of array.entries()){
    console.log(index, value);
}


var foo = {
    val: 10
}

var bar = foo;
console.log(foo.val, bar.val);
console.log(foo === bar);

bar.val = 20;
console.log(foo.val, bar.val);
console.log(foo === bar);


var a = 1;
var b = a;

console.log(a,b); // 1,1
console.log(a === b); // true

a = 10;
console.log(a,b); // 10 , 1


var foo = {
    val : 10
}

var bar = foo;
console.log(foo.val, bar.val);

bar.val = 20;
console.log(foo.val, bar.val);
// 변수 bar에 변수 foo의 값을 할당하였다. 변수 foo의 값은 생성된 객체를 가리키는 참고값. 
// 변수 bar에도 같은 참조값이 저장