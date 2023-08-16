function solution(clothes) {
    var answer = 1;
    var obj = {
        
    }

    for (let arr of clothes){
        if (arr[1] in obj) {
            obj[arr[1]].push(arr[0]);
        } else {
            obj[arr[1]] = [];
            obj[arr[1]].push(arr[0]);
        }
    }
    
    for (let i of Object.entries(obj)){
        answer *= (i[1].length+1);
        
    }
    answer -= 1;
    return answer;
}