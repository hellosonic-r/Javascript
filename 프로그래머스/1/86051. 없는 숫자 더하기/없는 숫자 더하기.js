function solution(numbers) {
    // const arr = Array(10).fill().map((_,idx) => {return idx+1});
    const arr = Array.from( {length : 10}, (element, idx) => {return idx;});
    let answer = 0;
    arr.forEach((element,idx) => {
        numbers.includes(element) ? answer += 0 : answer += element; 
    });
    
    
    
    return answer;
}