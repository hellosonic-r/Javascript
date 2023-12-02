function count(array, n){
    var cnt = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] == n){
            cnt += 1;
        }
    }
    return cnt;
}

function solution(X, Y) {
    var answer = '';
    var x_list = String(X).split("");
    var y_list = String(Y).split("");
    var obj = {};
    
    for (var i = 0; i < 10; i++){

        obj[i] = count(y_list, i);
        
    }
    console.log(obj);
    
    for (var i = 0; i <x_list.length; i++){
        if (obj[x_list[i]] >= 1){
            obj[x_list[i]] -= 1;
            answer += x_list[i];
        }
    }
    var result = answer.split("");
    result.sort(function(a,b){
        return b-a;
    });
    if (result.length == 0){
        answer = "-1";
    } else if (result[0] == 0){
        answer = "0";
    } else {
        answer = result.join("");
    }
    return answer;
}