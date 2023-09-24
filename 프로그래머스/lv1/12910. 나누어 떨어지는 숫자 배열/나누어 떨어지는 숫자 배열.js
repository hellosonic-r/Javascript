function solution(arr, divisor) {
    let answer = [];
    arr.forEach(element => {
        if (element % divisor == 0){
            answer.push(element);
        }
    });
    
    if (answer.length == 0) answer.push(-1);
    else {
        answer.sort((a,b) => (a-b));
    }
    return answer; 
}