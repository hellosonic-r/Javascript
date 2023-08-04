function solution(k, tangerine) {
    var answer = 0;
    var obj = {};
    tangerine.sort((a,b) => (a-b));
    console.log(tangerine);
    tangerine.forEach((n) => {
        if ((n in obj) == true){
            obj[n] += 1;
        } else {
            obj[n] = 1;
        }
    });
    
    var kind = Object.values(obj).sort((a,b) => (b-a));
    console.log(kind);
    var sum = 0;
    for (let num of kind){
        answer += 1;
        sum += num;
        if (sum >= k) break;
    }
    
    return answer;
}