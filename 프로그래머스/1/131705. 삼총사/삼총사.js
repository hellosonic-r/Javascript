var cnt = 0;

function dfs(depth, start, array, temp){
    if (temp.length == 3){
        var sum = temp.reduce(function (s, currValue){
            return s + currValue;
        });
        if (sum == 0) cnt += 1;
        return;
    }
    for (var i = start; i < array.length; i++){
        temp.push(array[i]);
        dfs(depth+1, i+1, array, temp);
        temp.pop();
    }
}
function solution(number) {
    var answer = 0;
    dfs(0, 0, number, []);
    answer = cnt;
    return answer;
    
}