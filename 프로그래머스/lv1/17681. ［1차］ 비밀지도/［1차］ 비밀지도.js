function solution(n, arr1, arr2) {
    var answer = [];
    var board1 = [];
    var board2 = [];
    for (var i of arr1){
        var temp = [];
        while (i != 0){
            temp.push(i % 2);
            i = parseInt(i / 2);
        }
        var len = temp.length;
        if (temp.length != n){
            for (var j = 0; j < n - len; j++){
                temp.push(0);
            }
        }
        temp.reverse();
        board1.push(temp);
    }
    
    for (var i of arr2){
        var temp2 = [];
        while (i != 0){
            temp2.push(i % 2);
            i = parseInt(i / 2);
        }
        var len = temp2.length;
        if (temp2.length != n){
            for (var j = 0; j < n - len; j++){
                temp2.push(0);
            }
        }
        temp2.reverse();
        board2.push(temp2);
    }
    
    for (var y = 0; y < n; y++){
        var temp = "";
        for (var x = 0; x < n; x++){
            if (board1[y][x] == 1 || board2[y][x] == 1){
                temp += "#";
            } else {
                temp += " ";
            }
        }
        answer.push(temp);
    }
    return answer;
}