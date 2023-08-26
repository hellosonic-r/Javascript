function solution(num_list) {
    var answer = 0;
    var h = 0;
    var j = 0;
    for (let i = 0; i < num_list.length; i++){
        if (i % 2 == 0) h += num_list[i];
        else {
            j += num_list[i];
        }
    }
    answer = Math.max(h,j);
    return answer;
}