function solution(a, b) {
    var answer = '';
    var obj = {
        1 : 31,
        2 : 29,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31,
    }
    var day = {
        0 : "FRI",
        1 : "SAT",
        2 : "SUN",
        3 : "MON",
        4 : "TUE",
        5 : "WED",
        6 : "THU",
    }
    var total = 0;
    for (var i = 1; i < a; i++){
        total += obj[i];
    }
    total -= 1;
    total += b;
    answer = day[total%7];
    return answer;
}