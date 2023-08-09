function solution(arr1, arr2) {
    var answer = [];
    var y = arr1.length;
    var x = arr1[0].length;
    
    for (var i = 0; i < y; i++){
        var temp = [];
        for (var j = 0; j < x; j++){
            temp.push(arr1[i][j] + arr2[i][j]); 
        }
        answer.push(temp);
    }
    return answer;
}