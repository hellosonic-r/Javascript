function solution(num_list) {
    var answer = 0;
    var h = "";
    var j = "";
    for (let num of num_list){
        if (num % 2 == 0){
            j += String(num);
        } else {
            h += String(num);
        }
    }
    answer = Number(h) + Number(j);
    return answer;
}