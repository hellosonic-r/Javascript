function solution(price, money, count) {
    var answer = 0;
    var totalPrice = 0;
    for (var i = 1; i < count+1; i++){
        totalPrice += i*price;
    }
    if (totalPrice <= money) {
        answer = 0;
    } else {
        answer = totalPrice - money;
    }
    return answer;
}