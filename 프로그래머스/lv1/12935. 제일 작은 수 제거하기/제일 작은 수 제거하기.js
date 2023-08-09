function solution(arr) {
    var answer = [];
    var min = Math.min(...arr);
    arr.forEach((element) => {
        if (element != min){
            answer.push(element);
        }
    });
    console.log(arr);
    if (answer.length == 0) answer.push(-1);
    return answer;
}