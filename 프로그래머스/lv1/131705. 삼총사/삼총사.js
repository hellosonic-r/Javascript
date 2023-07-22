var result = []

function dfs(depth, number, start, temp){
    if (depth == 3){
        if (temp == 0){
            console.log(temp);
            result.push(temp)
        }
        return;
        }
    
    for (var i = start; i < number.length; i++){
        var temp = temp + number[i]
        dfs(depth+1, number, i+1, temp)
        temp = temp - number[i]
    }
}

function solution(number) {
    var answer = 0;
    dfs(0,number,0,0);
    if (result.length == 0){
        answer = 0
    } else {
        answer = result.length;
    }
    return answer;
}