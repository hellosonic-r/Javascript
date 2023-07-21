function solution(my_string) {
    var answer = [];
    for (var i = 0; i < my_string.length; i++){
        if (Number(my_string[i]) || my_string[i] == "0"){
            answer.push(Number(my_string[i]));
        }
    }
    answer.sort(function(a,b){
        return a-b;
    })
    return answer;
}