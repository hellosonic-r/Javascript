function solution(order) {
    var answer = 0;
    tsn = [3,6,9]
    arr = String(order).split("").map(Number);
    for (var i of arr){
        if (tsn.includes(i) == true){
            answer += 1;
        }
    }
    return answer;
}