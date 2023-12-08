function solution(price, money, count) {
    var answer = -1;
    var i = 0;
    var total = 0;
    while (true){
        i+=1;
        if (i>count) break;
        total += price * i;
    }
    answer = total - money;
    if (answer < 0) answer = 0;

    return answer;
}