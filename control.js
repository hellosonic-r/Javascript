{
    var foo = 10;
    console.log(foo);
}

var x = 0;
while (x<10){
    x++
}
console.log(x);


function sum(x, y){
    return x + y;
}
console.log(sum(1, 2));

var num = 2;
var kind;

if (num > 0){
    kind = "양수";
}
console.log(kind);

if (num > 0){
    kind = "양수";
} else {
    kind = "음수";
}
console.log(kind);

if (num > 0){
    kind = "양수";
} else if (num < 0){
    kind = "음수";
} else {
    kind = "영";
}
console.log(kind);


var result = x % 2 ? "홀수" : "짝수";
console.log(result);

var num = 2;

var kind = num ? (num > 0 ? "양수" : "음수") : "영";


var month = 11;
var monthName;

switch (month){
    case 1:
        monthName = "January";
    case 2:
        monthName = "February";
    case 3:
        monthName = "March";
    case 4:
        monthName = "April";
    case 5:
        monthName = "May";
    case 6:
        monthName = "June";
    default:
        monthName = "일치하는 것이 없다";
}


var year = 2000;
var month = 2;
var days = 0;

switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log("일치하는 달이 없다");
}

console.log(days);


for (var i = 1; i >= 0; i--){
    console.log(i)
}


for (var i = 1; i <= 6; i++){
    for (var j = 1; j <= 6; j++){
        if (i+j === 6) console.log(`[${i}, ${j}]`); 
    }
}

var count = 0;

while (true){
    console.log(count);
    count++;
    if (count === 3) break;

}

fo: {
    console.log(1);
    break fo;
    console.log(2);
}

console.log("Done!")


outer: for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
        if ((i+j) === 3) break outer;
    }
}
console.log("done!")


var string = "hello World.";
var index;


for (var i = 0; i < string.length; i++){
    if (string[i] === "l"){
        index = i;
        break;
    }
}

console.log(index);


console.log(string.indexOf("h"));


var string = "Hello World.";
var count = 0;

for (var i = 0; i < string.length; i++){
    if (string[i] !== "l") continue;
    count++;
}

console.log(count);


