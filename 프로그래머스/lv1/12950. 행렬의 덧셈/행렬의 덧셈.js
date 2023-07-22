function solution(arr1, arr2) {
    var answer = [];

    for (var y = 0; y < arr1.length; y++){
        var temp = [];
        for (var x = 0; x < arr1[0].length; x++){
            temp.push(arr1[y][x]+arr2[y][x]);
        }
        answer.push(temp);
    }
    return answer;
}