
function count(array, n){
    var cnt = 0;
    for (var i = 0; i < n+1; i++){
        if (array[i] == 1){
            cnt += 1;
        }
    }
    return cnt;
}

function solution(n, m, section) {
    var answer = 0;
    var array = [];
    for (var i = 0; i < n+1; i++){
        array.push(0);
    }
    
    for (var s of section){
        if (array[s-1] == 0){
            answer += 1;
            for(var k = s-1; k<s-1+m ;k++){
            array[k] = 1;   
            }
        } else {
            continue;
        }
        
    }
    return answer;
}