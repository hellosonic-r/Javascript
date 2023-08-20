function solution(num_list) {
    var answer = 0;
    var multiple = num_list.reduce(function (s,currValue){
        return s*currValue;
    });
    var sum = num_list.reduce(function (s,currValue){
        return s+currValue;
    });
    console.log(multiple, Math.pow(sum,2))
    if (multiple < Math.pow(sum,2)) answer = 1;
    else if (multiple > Math.pow(sum,2)) answer = 0;
    return answer;
}