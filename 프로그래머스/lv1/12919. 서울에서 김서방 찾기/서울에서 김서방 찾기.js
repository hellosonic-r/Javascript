function solution(seoul) {
    var answer = '';
    var location = 0;
    for (var i = 0; i < seoul.length; i++){
        if (seoul[i] == "Kim"){
            location = i;
            return `김서방은 ${location}에 있다`;
        }
}
}
