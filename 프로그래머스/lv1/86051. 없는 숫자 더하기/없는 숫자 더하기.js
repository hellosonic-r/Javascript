function solution(numbers) {
    var answer = 45;
    var arr = Array(10).fill().map((element, idx) => {
        return idx;
    });
    var tmp = 0;
    
    for (let element of numbers){
        if (arr.includes(element) == true) tmp += element;
    }
    answer -= tmp;
    return answer;
}