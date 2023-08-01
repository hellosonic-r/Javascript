function solution(lottos, win_nums) {
    var answer = [];
    var correct = 0;
    var zeroCnt = 0;
    var obj = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6,
    }
    for (var num of lottos){
        if (num == 0){
            zeroCnt += 1;
        } else {
            if (win_nums.includes(num) == true){
                correct += 1;
            }
        }
    }
    console.log(correct);
    console.log(zeroCnt);
    answer.push(obj[correct+zeroCnt]);
    answer.push(obj[correct]);
    return answer;
}