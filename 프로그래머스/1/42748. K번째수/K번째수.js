function solution(array, commands) {
    var answer = [];
    for (let c of commands){
        var newArr = array.slice(c[0]-1, c[1]);
        newArr.sort((a,b) => (a-b));
        console.log(newArr);
        answer.push(newArr[c[2]-1]);
        
    }
    
    
    return answer;
}