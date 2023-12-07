function solution(cards1, cards2, goal) {
    var answer = '';
    var flag = true;
    while (goal.length > 0){
        var pick = goal.shift();
        if (pick == cards1[0]) {
            cards1.shift()
        } else if (pick == cards2[0]) {
            cards2.shift()
        } else if ((pick != cards1[0]) && (pick != cards2[0])) {
            flag = false;
            break;
        };
    }
    if (flag == true) {
        answer = "Yes";
    } else {
        answer = "No";
    }
    return answer;
}